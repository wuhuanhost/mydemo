package com.data.test;

import java.util.Observable;

public class Obser1 implements java.util.Observer {

	@Override
	public void update(Observable o, Object arg) {
		System.out.println("发送邮件的观察者已经被执行>>>>>>>>>>>."+arg);

	}

	
	
	
	public static void main(String[] args) {
		
		
		Subject s=new Subject();
		
		Observer a=new Observer();
		Obser1 b=new Obser1();
		
		s.addObserver(a);
		s.addObserver(b);
		
		s.setAbc("abc");
		
		
		
		
	}
	
	
}
