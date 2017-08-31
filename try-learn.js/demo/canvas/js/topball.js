$(function () {
	var ballList = [];
	var canvas,
		ctx,
		cw,
		ch;

	function initBall() {
		canvas = document.getElementById('ball');
		ctx = canvas.getContext('2d');
		cw = canvas.width;
		ch = canvas.height;


		for (var i = 0; i < 220; i++) {
			var ball = {};
			ball.xPointer = getRandom(20, cw - 20);
			ball.yPointer = getRandom(20, ch - 20);

			ball.x = getIndex();
			ball.y = getIndex();

			ball.vx = Math.random() * 0.3 + 0.3;
			ball.vy = Math.random() * 5 + 0.3;

			ball.rv = Math.random() * 1; //每个小球半径变化浮动  px/f
			ball.rr = getRandomBool(); //通过boolean 控制半径放大还是缩小

			ball.radius = 5;
			ball.color = getRandomColor();
			ballList.push(ball);
		}
	}


	function getIndex() {
		var arr = [0, 1];
		var index = Math.floor(Math.random() * arr.length);
		if (index == 0) {
			index = -1;
		}
		return index;
	}

	function getRandomBool() {
		if (Math.random() > 0.5) {
			return true;
		} else {
			return false;
		}
	}

	function getRandom(first, last) {
		var choice = last - first + 1;
		return Math.floor(Math.random() * choice + first)
	}

	function getRandomColor() {
		var str = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			var a = getRandom(0, 15);
			color = color + str.charAt(a);
		}
		return color;

	}

	function draw(ctx) {

		ctx.clearRect(0, 0, cw, ch)
		for (var i = 0; i < ballList.length; i++) {
			ctx.save();
			ctx.beginPath();
			ctx.fillStyle = ballList[i].color;
			ctx.arc(ballList[i].xPointer, ballList[i].yPointer, ballList[i].radius, 0, Math.PI * 2, false);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
		}
	}

	function update(ballList, ctx) {
		for (var i = 0; i < ballList.length; i++) {

			ballList[i].xPointer += ballList[i].vx * ballList[i].x;
			ballList[i].yPointer += ballList[i].vy * ballList[i].y;

			if (ballList[i].xPointer < ballList[i].radius * 2) {
				ballList[i].x = 1;
			}
			if (ballList[i].xPointer > cw - ballList[i].radius * 2) {
				ballList[i].x = -1;
			}
			if (ballList[i].yPointer < ballList[i].radius * 2) {
				ballList[i].y = 1;
				// ballList[i].radius = 0.1;
			}
			if (ballList[i].yPointer > ch - ballList[i].radius * 2) {
				ballList[i].y = -1;
			}

		}

		for (var i = getRandom(0, 20); i < getRandom(40, 60); i++) {
			ballList[i].color = getRandomColor();
		}

		for (var i = 0; i < ballList.length; i++) {
			//控制 小球半径变化
			if (ballList[i].radius > 15) {
				ballList[i].rr = false;
			}

			if (ballList[i].radius < 1) {
				ballList[i].rr = true;
			}

			if (ballList[i].rr) {
				ballList[i].radius = ballList[i].radius + ballList[i].rv;
			} else {
				ballList[i].radius = ballList[i].radius - ballList[i].rv;
			}

		}

	}

	function drawLine(ballList, ctx) {
		for (var i = 0; i < ballList.length; i++) {
			for (var j = 0; j < ballList.length; j++) {
				var x = Math.pow(ballList[i].xPointer - ballList[j].xPointer, 2);
				var y = Math.pow(ballList[i].yPointer - ballList[j].yPointer, 2)
				var l = Math.sqrt(x + y);

				if (l < 100 && l > 40) {
					ctx.save();
					ctx.beginPath();
					ctx.strokeStyle = getRandomColor();
					ctx.strokeStyle = "#fff";
					ctx.lineWidth = 0.1;
					ctx.moveTo(ballList[i].xPointer, ballList[i].yPointer);
					ctx.lineTo(ballList[j].xPointer, ballList[j].yPointer);
					ctx.closePath();
					ctx.stroke();
					ctx.restore();
				}
			}
		}
	}

	function play() {
		$('#ball').width($(window).width());
		initBall();
		timer = setInterval(function () {
			console.log(ballList[0].rv)
			draw(ctx);
			update(ballList, ctx)
			drawLine(ballList, ctx)
		}, 24)
	}
	play();

	$(window).resize(function () {
		clearInterval(timer);
		ballList = []
		play();


	})



})