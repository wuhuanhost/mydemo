/**
 * 文本流对象
 * @param  {Object} ) {               var tf [description]
 * @return {[type]}   [description]
 */
var textflow = (function() {
    var tf = {};
    //容器宽度
    tf.conWidth = 600;
    //容器高度
    tf.conHeight = 600;
    //每一行的字数
    tf.lineWordSize = 35;
    //textflowdata对象
    tf.textFlowData = [];
    //分页标志
    tf.pagingFlag = [];
    //分析完成的页面数据，可以直接用于渲染
    tf.pageList = [];

    tf.init = function(text, id) {
        //文本流字符串
        this.text = text;
        //文本流容器
        this.tfc = $("#" + id);
        //每一个文本块,按照行拆分
        this.everyBlock = _.split(this.text, "@@");

        for (var i = 0; i < this.everyBlock.length; i++) {
            //文本块中的每一行的字符数
            var everyLine = [];
            var sliceIndex = 0;
            for (var j = 0; j < this.everyBlock[i].length; j++) {
                var temp = "";
                var start = sliceIndex;
                var end = sliceIndex + tf.lineWordSize;
                if (j === 0) { //如果是第一行，首字缩进2个中文字符的宽度
                    temp = getSliceStr(this.everyBlock[i], true, start, end - 2, tf.lineWordSize);
                    sliceIndex = sliceIndex + tf.lineWordSize - 2;
                } else {
                    temp = getSliceStr(this.everyBlock[i], false, start, end, tf.lineWordSize);
                    sliceIndex = sliceIndex + tf.lineWordSize;
                }
                if (temp !== "") {
                    everyLine.push(temp);
                }
            }
            tf.textFlowData.push(everyLine);
        }
        console.log(tf.textFlowData);
    };

    tf.drawPage = function() {
        var html = "";
        for (var i = 0; i < tf.textFlowData.length; i++) {
            html += "<p id='" + i + "'>"
            for (var j = 0; j < tf.textFlowData[i].length; j++) {
                if (j == 0) {
                    html += "&nbsp;&nbsp;";
                }
                html += "<span>" + tf.textFlowData[i][j] + "</span>";
            }
            html += "</p>";
        }
        html += "<hr/>";
        this.tfc.html(html);
    };

    //测试方法
    tf.draw = function(data) {
        this.tfc.html("");
        var pageList = [];
        for (var i = 0; i < data.length; i++) {
            var span = document.createElement("span");
            span.setAttribute("id", "block-" + i);
            this.tfc.append(span);
            var lineArr = [];
            for (var j = 0; j < data[i].length; j++) {
                var p = document.createElement("p");
                p.setAttribute("id", "p-" + i + "-" + j);
                if (j === 0 && data[i][j] != "") {
                    p.innerHTML = "&nbsp;&nbsp;" + data[i][j];
                } else {
                    p.innerHTML = data[i][j];
                }
                //分页的开始，一旦存放文本的div的高度超过设定的值的时候，说明这一页的内容放满了。
                if (this.tfc.height() < 600) {
                    $("#block-" + i).append(p);
                    lineArr.push(data[i][j]);
                } else {
                    tf.textFlowData = delArrByIndex(tf.textFlowData, i, j); //移除分析完成的当前页的数据
                    pageList.push(lineArr);
                    tf.pageList.push(pageList);
                    console.log(">>>>>>>>>>>当前页数据分析完成");
                    return;
                }
            }
            pageList.push(lineArr);
        }

    };
    tf.process = function(i, j) {
        // while (tf.textFlowData.length > 0) {
        //      		console.log(tf.textFlowData.length+"???????????????????????????????????")
        tf.textFlowData = delArrByIndex(tf.textFlowData, i, j)
        tf.draw(tf.textFlowData);
        // }
        console.log("还未分析的数据===================" + tf.textFlowData.length);
        console.log(tf.textFlowData);
        console.log("分析完成的数据===================" + tf.pageList.length);
        console.log(tf.pageList);
    }


    return tf;
}());


/**
 * 一个长字符串按照开始下标和结束下标返回一个新字符串,字符串的长度不能小于arrSize
 * @param  {[type]} str     [description]
 * @param  {[type]} start   [description]
 * @param  {[type]} end     [description]
 * @param  {[type]} arrSize [description]
 * @return {[type]}         [description]
 */
function getSliceStr(dataStr, isFirstLine, start, end, arrSize) {
    var rstr = array2string(_.toArray(dataStr).slice(start, end));
    var count = arrSize - getStrLen(rstr);
    if (count >= 1) {
        if (isFirstLine) {
            rstr = array2string(_.toArray(dataStr).slice(start, (end + count - 2)));
        } else {
            rstr = array2string(_.toArray(dataStr).slice(start, (end + count)));
        }
    }
    return rstr;
}

/**
 * 数组转换为字符串
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function array2string(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        str = str.concat(arr[i])
    }
    return str;
}

/**
 * 获取字符串中和中文等宽字符的总长度
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
function getStrLen(str) {
    var regeHanzhi = /[\u0391-\uFFE5]/g;
    var regeNumber = /[\d\w\[\]\(\)-]/g; //英文数字\[ \]两个字符和一个汉字的宽度相同
    var len1 = 0;
    str.replace(regeHanzhi, function(m) {
        len1++;
    });
    var len2 = 0;
    str.replace(regeNumber, function(m) {
        len2++;
    });
    return len2 / 2 + len1;
}



function testDelArrByIndex() {
    var abc = [];
    var a1 = ["a1", "a1", "a1"];
    var a2 = ["a2", "a2", "a22"];
    var a3 = ["a3", "a3", "a3"];
    var a4 = ["a4", "a4", "a4"];
    var b1 = ["b1", "b1", "b1"];
    var b2 = ["b2", "b2", "b2"];
    var b3 = ["b3", "b3", "b3"];
    var b4 = ["b4", "b4", "b4"];
    abc.push(a1);
    abc.push(a2);
    abc.push(a3);
    abc.push(a4);
    abc.push(b1);
    abc.push(b2);
    abc.push(b3);
    abc.push(b4);
    console.log(">>>>>")
    console.log(abc);
    console.log(">>>>>")
    console.log(delArrByIndex(abc, 1, 1));



};

// testDelArrByIndex();

/**
 *根据下标删除二维数组中的值，返回新的数组
 **/
function delArrByIndex(arr, oda_index, tda_index) {
    console.log("<><><>,.,.,.,.,." + oda_index + "   " + tda_index);
    var data = [];
    var _index = oda_index;
    for (var i = oda_index; i < arr.length; i++) {
        if (i == oda_index) {
            var obj = [];
            for (j = tda_index; j < arr[i].length; j++) {
                obj.push([])
                obj.push(arr[i][j]);
            }
            data.push(obj);
        } else {
            data.push(arr[_index + 1]);
            _index++;
        }
    }
    console.log(data)
    return data;
}



//测试
textflow.init("清代中國，和西方國家相比落後整整一個歷史時代，因此，思想文化方面自然也比歐美國家落後很多。那時的歐美各國，不但封建思想體系早已遭到致命的打擊，隨著資本主義的發展，資產階級思想體系也出現了危機，無產階級革命導師馬克思和恩格斯創立了科學的共產主義學說。而鴉片戰爭前的中國，是清王朝統治下的主權獨立的封建社會。封建專制制度衰敗腐朽，土地兼併空前嚴重，階級矛盾日益加劇，考據學、程朱理學非常盛行，又嚴格奉行閉關鎖國政策。封建的政治、經濟、文化佔據統治地位，社會危機、民族危機一齊襲來。@@經濟基礎決定上層建築，社會存在決定社會意識。中國封建社會居於統治地位的思想，是佔有生產資料居於統治地位的封建地主階級的思想。封建統治階級的代表人物，從道光、咸豐、西太后到穆彰阿、琦善等，他們都極力強制人們信奉儒家[1]經書和程朱理學[2]。在外來侵略和國內社會危機面前，他們反對任何改革。道光皇帝主張「攘外必先安內」，在反侵略戰爭中又下令「慎持國體，俯順夷情」，也就是說既要維持「天朝上國」的體面，又要馴服地滿足侵略者的欲望。清朝統治集團中的頑固派，十分害怕侵略者的堅船利炮，在炮艦淫威之下，紛紛走上妥協投降的道路。然而，他們還妄自尊大，說「我朝以德服人，不在兵威」。他們甘居落後挨打的處境，妥協退讓以至投降，還要自吹是「以德服人」。@@鴉片戰爭後，隨著西方列強的侵入，西方的思想文化也大量湧入，形成「西學東漸」的局面。此時中國社會處在急劇動盪和巨大變化中，嚴重的民族危機和社會危機，對思想意識產生深刻的影響。尤其是鴉片戰爭慘敗，如同晴天霹靂，驚醒了埋頭故紙堆中的一部分封建知識份子。中國究竟向何處去，怎樣才能維護國家的獨立主權，成為人們特別是士大夫階層關心的問題。一些地主階級知識份子開始把注意力轉到對現實問題的研究上來。他們提倡經世致用，敢於面對現實，反對因循守舊，對社會現實不滿，要求革除弊政；主張嚴禁鴉片，抵抗外來侵略，具有強烈的愛國思想；開始瞭解外國情況，要求學習西方的軍事技術。這些就是地主階級改革派的主張。這一派的主要代表有龔自珍、林則徐、魏源、包世臣、姚瑩等人。他們的個人經歷儘管不同，思想風貌也各有特點，但基本立場和傾向卻有共同之處。他們是地主階級的思想家，仍站在封建統治者的立場上，不過對急速變化中的中國和世界有較敏銳的認識。他們也「忠君愛國」，但比一般士大夫顯得開明一些。@@龔自珍（1792-1841），清代中葉著名的思想家、文學家。浙江仁和（今杭州）人。名鞏祚，字舍人，號定庵。出身於仕宦家庭，學務博覽。曾跟外祖父段玉裁學習文字學，一八一九年在京從劉逢祿學《公羊春秋》。一八二九年中進士，任禮部主事。一八三九年辭官南下。著作編成《龔自珍全集》。他是嘉慶、道光年間提倡「經世致用」的今文經學派的重要人物。他反對脫離實際的繁瑣考據和空談心性的宋明理學。他是名副其實的社會批判家，曾尖銳揭露清朝統治的腐朽衰敗，要求變法革新；抨擊君權神授，主張君臣共治天下；揭露吏治黑暗、官吏昏庸；揭露科舉束縛人才，八股文禁錮思想；也曾致力於邊疆史地研究，警惕沙俄侵犯我國領土，主張移民戍邊，開發西北，保衛邊疆，抵禦外侮。希望中國能出現「銀價平、物力實、人心定」的治世。在哲學上，他持「性無善無不善」之說，反對孟子的「性善」論和荀子的「性惡」論。他提出「更法」、「改圖」、「變功令」的改革主張，強調萬事萬物都處於變化之中。他提倡「尊史」，認為一切學術都是史，探討問題應注意其發展變革。龔自珍的思想和詩作對當時和以後影響很大，梁啟超說：「晚清思想之解放，自珍確與有功焉。」@@林則徐（1785-1850），字少穆，福建候官人。出身于破落地主家庭。林則徐從小勤奮好學，興趣廣泛。一八一一年中進士，先後任江蘇按察使，陝西、湖北布政使，東河道總督，兩江、湖廣、兩廣、陝甘、雲貴總督等職。他一生有三分之二的時間是在官場上度過的。他對清王朝忠心耿耿，憂國憂民，執法公正，關心人民疾苦，修河治水發展農業生產，「知民情向背而順導」，贏得「賢名滿天下」的聲譽，是清代道光朝庭封疆大吏中不可多得的政治家、實幹家。他曾和志同道合的朋友龔自珍、魏源、黃爵滋等在北京組織「宣南詩社」，提倡經世致用，鼓吹改革弊政，挽救民族危亡；要求廢科舉、禁鴉片、造機器、建海防。他為了維護清王朝的統治，維護中華民族的利益，堅決主張嚴厲禁煙，派赴廣州查禁鴉片，取得虎門銷煙的重大勝利。英國挑起侵華戰爭後，他利用民心、民力堅決抗擊侵略者。受誣害蒙冤被革職後，赴新疆伊犁戍邊。曾和喀喇沙爾辦事大臣全慶（全小汀）會同勘查南疆墾地六十萬畝；協助伊犁將軍布彥泰興辦水利、開闢屯田。一八四六年被重新起用，任陝甘總督，兩年後又調任雲貴總督，處理漢回互鬥案。一八四九年因病辭職返籍。次年六十六歲的林則徐再度被咸豐皇帝封為欽差大臣，去廣西督辦軍務，鎮壓拜上帝會，途中病逝於廣東潮州。遺著有《林則徐集》、《林文忠公政書》、《雲左山房文鈔》等。林則徐不僅是抗英民族英雄，偉大的愛國主義者，而且是地主階級改革派的典型代表，是首倡向西方學習，「睜眼看世界的第一人」。他派人翻譯西方書刊，編成《四洲志》，主張學習西方的軍事技術，購買西洋軍器，以抵抗外來侵略。@@魏源（1794-1857），字默深，湖南邵陽人。出身于小官僚地主家庭。道光進士，曾任內閣中書。從劉逢祿學《公羊春秋》，與龔自珍同屬主張「經世致用」的今文學派。一八二二年中舉後，受江蘇布政使賀長齡之聘，輯《皇朝經世文編》，接觸大量有關時政的文獻。鴉片戰爭的慘敗對魏源的思想震動很大，憤而寫成《聖武記》、《海國圖志》等書，以激勵國人發憤圖強，學習西方，抵抗侵略。他主張「盡得西洋之長技為中國之長技」，師夷之長技目的是「制夷」。他提倡創辦民用工業，允許私人設立廠局，自行製造和銷售輪船器械，使國家富強。他斥責宋明理學為「俗學」、「庸學」；批評考據學禁錮天下聰明智慧；宣傳今勝於古的觀點，主張革新變法，「去偽、去飾、去畏難、去養癰、去營窟」，「以實事程實功，以實功程實事」。他在《默觚》中發揮「及之而後知」的認識論思想。他的歷史進化觀與要求變革的思想，成為近代中國資產階級改良思想的先驅。@@龔自珍、林則徐、魏源在哲學思想上的某些觀點具有唯物主義傾向。在社會歷史觀方面，變易進化觀成為他們要求改革社會的理論依據。@@龔自珍認識到人類歷史是不斷演變和進化的。古之世─今之世─後之世，「旋轉簸蕩而不已」。龔自珍的「世變」思想（「世有三等」，即治世、亂世、衰世）是從劉逢祿《公羊春秋》「三世說」那裡學來的。他繼承《周易》「窮則變，變則通」的思想，指出：「自古至今，法無不改，勢無不積，事例無不變遷，風氣無不移易。」他激烈反對「拘一祖之法」，認為「一祖之法無不敝，千夫之議無不靡，與其贈來者以勁改革，孰若自改革」，一代之興都是革前代之敝，「更法」是勢所必然的。這就是他講時務、求變革的理論根據。@@魏源和林則徐、龔自珍一樣，主張變法革新的理論依據，也是歷史變易的進化觀。魏源把公羊學派的「三世說」，即據亂世、升平世、太平世，解釋為太古、中古、和末世（「弊極之世」），這還是封建主義的歷史循環論。不過在他看來，天地萬物和人類社會發展是不斷演進變化著的，「三代以上，天皆不同今日之天，地皆不同今日之地，人皆不同今日之人，物則不同今日之物」，「勢則日變而不可複者也」，「其不變者道而已」，統治人民的辦法（「勢」）必須因時而易。他認為，「天下無數百年不敝之法，無窮極不變之法，無不除弊而能興利之法，無不易簡而能變通之法」。他列舉史實證明後世的法令制度總要比古代的進步，歷史不會倒退，變化趨勢是愈來愈進步，是不可遏止的。他說：「租庸調製變為兩稅法，兩稅法又變為一條鞭法，變古愈盡，便民（指封建地主階級）愈甚。」制度的改革必須順應「人情所群便」。@@龔自珍、魏源的歷史變易觀以及經世致用之學，打破當時學術界「萬馬齊喑」的沉悶空氣，促進思想解放，在近代哲學史上產生了深遠影響。但是，龔自珍、魏源畢竟是封建地主階級的思想家，他們的歷史觀從整體上看仍是唯心主義的。如他們所說的「勢」，只是指歷史進化的趨勢和統治人民的辦法，並不是指歷史發展的客觀規律；他們所說的「民」，也只是指封建地主階級，並不是指人民群眾；他們所說的「體」和「道」，是指封建制度和封建倫理綱常。這表明，他們只是要求在不改變封建統治的基礎上進行枝節的改革。", "textflow");
console.log("拆分之后的数据===================" + textflow.textFlowData.length);
console.log(textflow.textFlowData);
textflow.draw(textflow.textFlowData);

console.log("还未分析的数据===================" + textflow.textFlowData.length);
console.log(textflow.textFlowData);
console.log("分析完成的数据===================" + textflow.pageList.length);
console.log(textflow.pageList);
