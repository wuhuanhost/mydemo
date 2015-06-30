var data1 = "{\"data\":[{\"id\":1,\"name\":\"一级推广\",\"xiaji\":[{\"id\":3,\"name\":\"二级推广\"},{\"id\":2,\"name\":\"二级推广\",\"xiaji\":[{\"id\":5,\"name\":\"三级推广\",\"xiaji\":[{\"id\":6,\"name\":\"四级推广\"},{\"id\":8,\"name\":\"四级推广\"}]},{\"id\":4,\"name\":\"三级推广\"}]}]},{\"id\":7,\"name\":\"一级推广\"}],\"success\":\"success\"}";


function drawRelationalGraph(json) {

	//var json=eval('('+data1+')');
	a = new dTree('a');
	a.add(0, -1, '推广级别层级关系图');

	//循环一级推广
	for (var i = 0; i < json.data.length; i++) {


		a.add(json.data[i].id, 0, '一级推广[ ' + json.data[i].name + " ]", '#');


		if (typeof(json.data[i].xiaji) != 'undefined' && json.data[i].xiaji.length > 0) {
			//循环二级推广

			for (var j = 0; j < json.data[i].xiaji.length; j++) {
				a.add(json.data[i].xiaji[j].id, json.data[i].id, '二级推广[ ' + json.data[i].xiaji[j].name + " ]", '#');


				if (typeof(json.data[i].xiaji[j].xiaji) != 'undefined' && json.data[i].xiaji[j].xiaji.length > 0) {
					//循环三级推广

					for (var k = 0; k < json.data[i].xiaji[j].xiaji.length; k++) {

						a.add(json.data[i].xiaji[j].xiaji[k].id, json.data[i].xiaji[j].id, '三级推广[ ' + json.data[i].xiaji[j].xiaji[k].name + " ]", '#');


						if (typeof(json.data[i].xiaji[j].xiaji[k].xiaji) != 'undefined' && json.data[i].xiaji[j].xiaji[k].xiaji.length > 0) {

							//循环四级推广        	

							for (var m = 0; m < json.data[i].xiaji[j].xiaji[k].xiaji.length; m++) {

								if (typeof(json.data[i].xiaji[j].xiaji[k].xiaji[m]) == "object") {

									a.add(json.data[i].xiaji[j].xiaji[k].xiaji[m].id, json.data[i].xiaji[j].xiaji[k].id, '四级推广[ ' + json.data[i].xiaji[j].xiaji[k].xiaji[m].name + " ]", '#');
								}
							}
						}
					}
				}
			}
		}
	}
	//document.write(a);
	console.log(a.toString());
	$("#data").html(a.toString());
	addStyle();
}

drawRelationalGraph(data1);