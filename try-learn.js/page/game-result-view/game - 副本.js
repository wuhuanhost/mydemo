//路单结构
var list = [{
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "小" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "小" //大小单双奇偶
}, {
    issue: 1, //期号
    result: "大" //大小单双奇偶
}]

console.log(list.length)
var zoom1 = 0;
$(document).ready(function() {
    var width1 = document.documentElement.clientWidth;
    var width2 = 750;
    if (width1 > 750) {
        width1 = 460
    };
    var zoom = width1 / width2;
    zoom1 = zoom * 100;
    document.querySelector("html").style.fontSize = zoom * 100 + "px";
    document.querySelector("html").style.height = "100%";

    initTable(16, 6);
    drawResult();


    $(".tab>ul>li").click(function() {
        console.log(this);
        $("#content" + $(this).val()).attr('style', 'display:block').siblings("div").attr('style', 'display:none;');
    });

    var startX, startY;
    $(".tab>ul>li").on("touchstart", function(e) {
        e.preventDefault();
        e.stopPropagation();
        startX = e.originalEvent.changedTouches[0].pageX,
            startY = e.originalEvent.changedTouches[0].pageY;
        console.log(e.originalEvent.changedTouches[0].pageY)
    });
    $(".tab>ul>li").on("touchmove", function(e) {
        e.preventDefault();
        e.stopPropagation();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
            moveEndY = e.originalEvent.changedTouches[0].pageY,
            X = moveEndX - startX,
            Y = moveEndY - startY;

        // console.log(e.currentTarget)   
        console.log(moveEndY / zoom1 + "rem")
        var arcWith = parseInt(1.03 * zoom1);
        var acrHeight = parseInt(2.28 * zoom1);
        console.log(arcWith + "   " + acrHeight + "  " + moveEndY);
        var index = 0;
        if (0 <= moveEndY && moveEndY < acrHeight / 3) {
            console.log("1")
            index = 1;
        } else if (acrHeight / 3 <= moveEndY && moveEndY < acrHeight * 2 / 3) {
            index = 2;
            console.log("2")
        } else {
            index = 3;
            console.log("3")
        }
        $("#content" + index).attr('style', 'display:block').siblings("div").attr('style', 'display:none;');
    });
    $(".tab").on("touchend", function(e) {


    })

});


//表格初始化
function initTable(rows, columns) {
    var table = "";
    for (var i = 0; i < rows; i++) {
        if (i % 2 === 0) {
            table += "<div class='column column-odd column-" + i + "' style='margin-left:" + parseFloat(i * 0.38) + "rem;'>";
        } else {
            table += "<div class='column column-even column-" + i + "' style='margin-left:" + parseFloat(i * 0.38) + "rem;'>";
        }
        for (var j = 0; j < columns; j++) {
            table += "<div class='row col-" + i + " row-" + j + " retina-border rt-bd-all' style='margin-top:" + parseFloat(j * 0.3 * 0 + 0 * j * 0.01) + "rem;'></div>";
        }
        table += "</div>";
    }
    // $("#content1").html(table);
};



//获取数组最后16个元素
function getArr() {
    var _arr = [];
    for (var k = 0; k < arr.length; k++) {
        var _col = [];
        var dasdsa=arr[k].length-16;
        for (var m = 0; m <arr[k].length; m++) {
            if (m>=dasdsa) {
                _col.push(arr[k][m]);
            }
        }
        _arr.push(_col)
    }
    return _arr;
}



function initTable123() {


    var _arr = getArr();

    console.log(_arr)
    var table = "";
    for (var i = 0; i < _arr.length; i++) {
        table += "<div class='rows'>";
        for (var j = 0; j < _arr[i].length; j++) {
            if (j%2===0) {
                table += "<div class='column column-even'><div class='grid grid-big retina-border rt-bd-all'>" + _arr[i][j].result + "</div></div>";
            } else {
                table += "<div class='column column-odd'><div class='grid grid-big retina-border rt-bd-all'>" + _arr[i][j].result + "</div></div>";
            }
        }
        table += "</div>";
    }
    table += "</div>"
    $("#content11").html(table);
    // 
    // 
    // 
    // 















};




var lastResult = null; //缓存上一次的结果
var lastCol = 0; //缓存上一列
var lastRow = 0; //缓存上一行
var maxSameResult = 0; //连续开一样的结果有多少期
var turnCol = 0; //记录长注单拐弯时候的列值
var turnRow = 0; //记录长注单拐弯时候的行
var maxCol = 15; //最大列为16（0-15）
var maxRow = 5; //最大行为6（0-5）
var colWidth = 0.38; //列的宽度,单位rem
var arr = []; //路单坐标数据


//在内存中绘制表格
function drawTableInMemory() {
    for (var i = 0; i <= maxRow; i++) {
        var rows = [];
        for (var j = 0; j <= maxCol; j++) {
            rows.push({
                row: i,
                col: j,
                result:""
            });
        }
        arr.push(rows);
    }
    console.log(arr);
}


drawTableInMemory();

//绘制路单
function drawResult() {
    for (var i = 0; i < list.length; i++) {
        console.log(list[i])
        newRequest(list[i]);
    }
}



//创建新列
function createNewColumn(_arr, currentCol, maxCol, data) {
    console.log("???????????????????????" + currentCol + "  " + maxCol)
        // console.log(_arr)
    for (var i = 0; i < _arr.length; i++) {
        _arr[i].push({
            row: i,
            col: currentCol + 1,
            result:""
        });
    }
    console.log(_arr)
    return _arr;
}



//检查指定格子是否能插入数据
function checkNextGridIsInsertInArr(row, col) {
    var flag = false;
    var object;
    try {
        object = arr[row][col];
        flag = true;
    } catch (e) {
        console.log("err")
        flag = false;
    }
    console.log(object);
    console.log("row:=" + row + "   col:=" + col + "  该位置可以插入数据>>>:" + flag);
    if (flag && object != undefined&&object.result==="") {
        return true;
    } else {
        return false
    }

}


function newRequest(data) {
    if (lastResult !== null) {
        if (lastResult.result === data.result) { //eg:上一次开大本次也开大
            if (checkNextGridIsInsertInArr(lastRow + 1, lastCol) && !turnCol) {
                lastRow = lastRow + 1; //同一列行数加1
            } else {
                console.log("===========================================")
                    //console.log(checkNextGridIsInsertInArr(lastRow, lastCol + 1) + " " + (lastCol + 1) + "   " + lastRow);

                if (checkNextGridIsInsertInArr(lastRow, lastCol + 1)) { //同行的下一列可以插入数据，水平向右
                    lastCol = lastCol + 1;
                    lastRow = lastRow;
                } else { //不能插入
                    //创建新的一列
                    //删除第一列
                    //平移所有列
                    console.log("不能插入数据.............")
                    arr = createNewColumn(arr, lastCol, maxCol, data);
                    arr[lastRow][lastCol + 1].result = data.result;
                    lastCol=lastCol+1;
                    //重新绘制

                }

                if (!turnCol || turnRow !== lastRow) { //路单拐点变化
                    turnCol = lastCol;
                    turnRow = lastRow;
                }
            }
            maxSameResult = maxSameResult + 1;
        } else { //上一次和本次开的结果不一样，在新列上显示路单

            if (turnCol) { //路单存在拐点,在拐点的列的第一个位置插入新的结果
                lastCol = turnCol;
                lastRow = 0;
                maxSameResult = 0;
                turnCol = "";
            } else {
                lastCol = lastCol + 1;
                lastRow = 0;

            }
        }
    } else { //第一个格子
        lastCol = 0;
        lastRow = 0;
        maxSameResult = 1;
    }
    lastResult = data;
    if (checkNextGridIsInsertInArr(lastRow, lastCol)) {
        arr[lastRow][lastCol].result = data.result;
    }
                    initTable123();
    $(".col-" + lastCol + ".row-" + lastRow + "").html("<div class='grid grid-" + cnToEn(data.result) + "'>" + data.result + "</div>");
    console.log("列：" + lastCol + "   行：" + lastRow + "  point：" + turnCol + "         " + maxSameResult)
}











function cnToEn(str) {
    var enArr = {
        "大": "big",
        "小": "small"
    };
    return enArr[str];
}