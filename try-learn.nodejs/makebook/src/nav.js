function makeNav(ddd){d=new dTree('d');for(var i=0;i<ddd.length;i++){d.add(ddd[i].index,ddd[i].id,ddd[i].title,ddd[i].link)};
$("#dtree-view").html("<p><a href='javascript: d.openAll();'>展开全部</a> | <a href='javascript: d.closeAll();'>关闭全部</a></p>"+d.toString());
}
