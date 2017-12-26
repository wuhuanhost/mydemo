package com.datainfo.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.log4j.Logger;

public class BaseDAO {
	ReadDBProperties rdbp = ReadDBProperties.getInstance();
	private String url = rdbp.getDb_url();
	private String driver = rdbp.getDb_driver();
	private String user = rdbp.getDb_username();
	private String pwd = rdbp.getDb_password();
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;

	Logger log = Logger.getLogger(this.getClass());
	// new一个本身实例
	private static final BaseDAO baseDao = new BaseDAO();

	// 私有构造方法
	private BaseDAO() {

	}

	// 提供公开的获取实例的方法
	public static BaseDAO getInstance() {
		return baseDao;
	}

	/**
	 * 获取链接对象的方法
	 * 
	 * @return
	 */
	public Connection getConnection() {
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url, user, pwd);
		} catch (ClassNotFoundException e) {
			System.out.println("加载驱动出现异常!");
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return conn;
	}

	/**
	 * 查询的操作
	 * 
	 * @param sql
	 * @return
	 */
	public ResultSet extuceQuery(String sql, Object[] values) {
		conn = getConnection();
		try {
			pstmt = conn.prepareStatement(sql);
			setValue(values);
			log.info(pstmt.toString());
			System.out.println(pstmt.toString());
			rs = pstmt.executeQuery();
		} catch (SQLException e) {
			System.out.println("查询数据出现异常!");
			e.printStackTrace();
		}
		return rs;
	}

	/**
	 * 添加,删除,修改的操作
	 * 
	 * @param sql
	 * @return
	 */
	public boolean extuceUpdate(String sql, Object[] values) {
		getConnection();
		boolean b = false;
		try {
			//
			pstmt = conn.prepareStatement(sql);
			setValue(values);
			log.info(pstmt.toString());
			System.out.println(pstmt.toString());
			int i = pstmt.executeUpdate();
			if (i >= 1) {
				b = true;
			}
		} catch (SQLException e) {
			System.out.println("修改数据出现异常!");
			e.printStackTrace();
		} finally {

			closeAll();
		}
		return b;
	}

	public void closeAll() {
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				e.printStackTrace();
				System.out.println("关闭结果集的时候出现异常！");
			}
			if (pstmt != null) {
				try {
					pstmt.close();
				} catch (SQLException e) {
					e.printStackTrace();
					System.out.println("关闭执行对象时候出现异常！");
				}
			}
			try {
				if (conn != null && (!conn.isClosed())) {
					conn.close();
				}
			} catch (SQLException e) {
				System.out.println("关闭连接时出现异常！");
			}
		}
	}

	/**
	 * 为占位符赋值
	 * 
	 * @param values
	 */
	public void setValue(Object[] values) {
		if (values != null && values.length != 0) {
			for (int i = 0; i < values.length; i++) {
				try {
					pstmt.setObject(i + 1, values[i]);
				} catch (SQLException e) {
					System.out.println("为占位符赋值出现异常!");
					e.printStackTrace();
				}
			}
			values = null;

		}
	}
}
