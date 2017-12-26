package com.datainfo.test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import com.alibaba.fastjson.JSONObject;

public class GetIpInfo {
	private String region;// 省份
	private String areaId;// 区域编号
	private String countryId;// 国家代码(中国就是 CN)
	private String isp;// 运营商
	private String regionId;// 省份编码
	private String code;// 获取数据的状态，data表示为获取数据成功，noDate表示数据获取失败。
	private String ip;// ip
	private String country;// 国家
	private String city;// 城市
	private String ispId;// 运营商id
	private String cityId;// 城市编号
	private String area;// 区域名称（比如西安的ip这个属性就是西北）
	private String county;
	private String countyId;
	private static GetIpInfo searchIp = new GetIpInfo();// 实例化ipinfo对象

	private GetIpInfo() {// 私有构造方法
	}

	public static GetIpInfo getInstance() {// 提供统一公开获取实例的方法
		if (searchIp != null) {
			return searchIp;
		}
		return null;
	}

	public static void main(String[] args) {

		GetIpInfo ips = GetIpInfo.getInstance();
		 ips = ips.getIpInfoObject("114.114.114.114");
		 System.out.println(ips.getArea());
//		String ip = null;
//		for (int i = 41; i < 255; i++) {
//			for (int j = 0; j < 255; j++) {
//
//				for (int k = 1; k < 255; k++) {
//
//					for (int l = 0; l < 255; l++) {
//
//						ip = i + "." + j + "." + k + "." + l;
//						ips = ips.getIpInfoObject(ip);
//						System.out
//								.println(ips.getCountry() + ips.getArea()
//										+ ips.getRegion() + ips.getCity()
//										+ ">>>>" + ip);
//					}
//				}
//			}
//
//		}

	}
	// 给定一个ip地址获取ip地址的详细信息
	public static String getIpInfo(String ipAddress) {
		String ip = "http://ip.taobao.com/service/getIpInfo.php?ip="
				+ ipAddress;
		URL url;
		HttpURLConnection conn = null;
		InputStream urlStream = null;
		BufferedReader reader = null;
		String str;
		StringBuffer bstr = new StringBuffer();
		try {
			url = new URL(ip);
			conn = (HttpURLConnection) url.openConnection();
			conn.connect();
			urlStream = conn.getInputStream();
			reader = new BufferedReader(new InputStreamReader(urlStream));
			while ((str = reader.readLine()) != null) {
				bstr.append(str);
			}
		} catch (Exception e) {
			System.out.println("获取数据出现......");
			e.printStackTrace();
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
					System.out.println("关闭bufferReader出现异常");
					e.printStackTrace();
				}
			}
			if (urlStream != null) {
				try {
					urlStream.close();
				} catch (IOException e) {
					System.out.println("关闭urlInputStream出现异常");
					e.printStackTrace();
				}
			}
			if (conn != null) {
				conn.disconnect();
			}
		}
		return bstr.toString();
	}

	// 获取输入ip的详细信息
	public GetIpInfo getIpInfoObject(String ipAddr) {
		GetIpInfo ip = GetIpInfo.getInstance();
		String jSONip = getIpInfo(ipAddr);
		String flag = "";// 是否获取到数据
		flag = JSONObject.parseObject(jSONip).get("code").toString();
		String data = null;
		JSONObject json = new JSONObject();
		if (flag.equals("0")) {// 数据获取成功
			data = JSONObject.parseObject(jSONip).get("data").toString();
			json = JSONObject.parseObject(data);
			ip.setArea(json.get("area").toString());
			ip.setAreaId(json.get("area_id").toString());
			ip.setCity(json.get("city").toString());
			ip.setCityId(json.get("city_id").toString());
			ip.setCode("data");
			ip.setCountry(json.get("country").toString());
			ip.setCountryId(json.get("country_id").toString());
			ip.setCounty(json.get("county").toString());
			ip.setCountyId(json.get("county_id").toString());
			ip.setIp(json.get("ip").toString());
			ip.setIsp(json.get("isp").toString());
			ip.setIspId(json.get("isp_id").toString());
			ip.setRegion(json.get("region").toString());
			ip.setRegionId(json.get("region_id").toString());
		} else {
			ip.setCode("noData");
			// System.out.println("数据获取失败！！！");
		}
		return ip;
	}

	/**
	 * 获取的数据中的中文字符是unicode编码，所以要转换一下数据的格式( 本身java 是支持unicode 编码的，所以像 str =
	 * "\u4e2d\u56fd"; 打印出来是正常的。这里要是对 str = "\\u4e2d\\u56fd";
	 * 这种形式的unicode码进行的转换。
	 * 
	 * 汉字转 unicode 可以用 Integer.toHexString(ch)。 unicode 转汉字关键的是
	 * (char)Integer.parseInt("4e2d", 16)。)
	 * 
	 * @param arg0
	 * @return
	 */

	public String encoding(String arg0) {
		String str = "";
		String s[] = arg0.split("\\\\u");
		for (int i = 1; i < s.length; i++) {
			int ab = Integer.valueOf(s[i], 16);// 先将16进制转换为整数
			char ac = (char) ab;// 再将整数转换为字符
			str += ac;
		}
		return str;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	public String getAreaId() {
		return areaId;
	}

	public void setAreaId(String areaId) {
		this.areaId = areaId;
	}

	public String getIsp() {
		return isp;
	}

	public void setIsp(String isp) {
		this.isp = isp;
	}

	public String getCountryId() {
		return countryId;
	}

	public void setCountryId(String countryId) {
		this.countryId = countryId;
	}

	public String getRegionId() {
		return regionId;
	}

	public void setRegionId(String regionId) {
		this.regionId = regionId;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getIspId() {
		return ispId;
	}

	public void setIspId(String ispId) {
		this.ispId = ispId;
	}

	public String getCityId() {
		return cityId;
	}

	public void setCityId(String cityId) {
		this.cityId = cityId;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public String getCountyId() {
		return countyId;
	}

	public void setCountyId(String countyId) {
		this.countyId = countyId;
	}

}
