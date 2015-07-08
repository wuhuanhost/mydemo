/**
 * javascript面向对象的编程的实现
 */

//1、模拟多态
var Animal = function(obj) {
	if (obj instanceof Durk) { //如果obj是durk类的实例
		console.log("鸭子嘎嘎......");
	} else if (obj instanceof Dog) {
		console.log("小狗旺旺......");
	}
};
//鸭子抽象类
function Durk(name) {
	this.name = name;
};
//小狗抽象类 
function Dog(name) {
	this.name = name;

};

Animal(new Durk("123"));
Animal(new Dog("123"));

//2、js继承的实现
function Car(color) {
	this.color = color;
};

Car.prototype.run = function(type) {
	console.log("颜色为【" + this.color + "】的*" + type + "*正在路上奔跑......");
};

//继承Car的属性
function Taxi(color, speed) {
	this.speed = speed; //Taxi新增加的属性
	Car.call(this, color);
};
//继承Car的方法
for (var i in Car.prototype) {
	/**
	 *循环赋值的好处就是，子类新增加方法的时候，不会给父类增加方法
	 * 如果使用Taxi.prototype = Car.prototype；那么子类新增加一个方法，父类同样的也多了个同样的方法;
	 */
	Taxi.prototype[i] = Car.prototype[i];
}

//重写父类的run方法
Taxi.prototype.run = function(type) {
	console.log("颜色为【" + this.color + "】的*" + type + "*正在路上奔跑......速度>>>>>" + this.speed + "km/h");
}

Taxi.prototype.privateFn = function() {

	console.log("Taxi新增加的方法......");
}

var t = new Taxi("黄色", 60);
t.run("出租车");
t.privateFn();

var c = new Car("红色");
c.run("小轿车");
//c.privateFn(); //会报错，Car没有privateFn这个方法

//3、链式调用
function Bird() {
	this.wing = 2;
	this.fly = function() {
		alert("我是鸟，我会飞");
		return this;
	}
}
Bird.prototype.jiao = function() {
	alert('我的叽叽喳喳的叫')
};
new Bird().fly().jiao(); //链式调用