    var children = require("child_process");
    var path = require("path");
	function processTxtToJson() {
		var temp="";
        console.log("------------------------");
        var lesson = children.spawn("ruby", ["lesson.rb", "E:\\沃德丰2016\\人教一数上\\第一册\\txt\\k1_1.txt", "json"], {
            "cwd": path.join(__dirname, "/bin")
        });

        lesson.stderr.on('data', function(data) {
            console.log('stderr: ' + data);
            $("#html").html(data);
        });

        lesson.stdout.on('data', function(data) {
           
            var abc = data.toString();
           
            
			temp+=data.toString();
			if(temp.match("#####")){
				console.log(JSON.parse(temp.replace("#####","")).title);	
			}


        });

        lesson.on('exit', function(code) {
            console.log('child process exited with code ' + code);
        });

    }

	processTxtToJson();