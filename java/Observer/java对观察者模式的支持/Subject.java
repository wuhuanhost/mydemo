package com.data.test;

import java.util.Observable;

public class Subject extends Observable {

	private String abc = "";

	public void setAbc(String a) {
		this.abc = a;
		setChanged();
		notifyObservers(abc);
		
	}

}
