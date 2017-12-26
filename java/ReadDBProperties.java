package com.datainfo.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URISyntaxException;
import java.util.Properties;

/**
 * 数据库访问配置文件各参数的获取
 * 
 * @author lzx
 * 
 */
public class ReadDBProperties {
	// 数据库及server配置文件路径
	//配置文件放在src根目录下即可
	private static final String ACTIONPATH = "db.properties";
	private static ReadDBProperties instance = null;

	private String db_username = null;// 数据库用户名
	private String db_password = null;// 数据库密码
	private String db_url = null;// 数据库连接字符串
	private String db_driver = null;// 数据库驱动字符串

	public String getDb_url() {
		return db_url;
	}

	public void setDb_url(String db_url) {
		this.db_url = db_url;
	}

	public String getDb_driver() {
		return db_driver;
	}

	public void setDb_driver(String db_driver) {
		this.db_driver = db_driver;
	}

	private ReadDBProperties() {
	}

	public String getDb_username() {
		return db_username;
	}

	public String getDb_password() {
		return db_password;
	}

	public static ReadDBProperties getInstance() {
		if (instance == null) {
			instance = new ReadDBProperties().getNewDbConfig();
		}
		return instance;
	}

	private ReadDBProperties getNewDbConfig() {

		ReadDBProperties dc = new ReadDBProperties();
		Properties prop = new Properties();
		String path = null;
		FileInputStream fis = null;
		try {
			path = ReadDBProperties.class.getClassLoader().getResource("")
					.toURI().getPath();//获取项目编译后的classes/根目录
			System.out.println(path);// 例如：  /F:/Users/test/Workspaces/new/dlwebsite/WebRoot/WEB-INF/classes/     此目录对应编译前的src目录
			fis = new FileInputStream(new File(path + ACTIONPATH));
			prop.load(fis);
			dc.db_username = prop.getProperty("db_username");
			dc.db_password = prop.getProperty("db_password");
			dc.db_url = prop.getProperty("db_url");
			dc.db_driver = prop.getProperty("db_driver");

		} catch (URISyntaxException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		return dc;
	}
	public static void main(String[] args) {
		ReadDBProperties r=new ReadDBProperties();
		r.getNewDbConfig();
	}
}