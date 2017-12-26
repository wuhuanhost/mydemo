package Observer;

/**
 * 观察者A，（报纸订阅者）
 * 
 * @author test
 * 
 */
public class PersonBImpl implements Person {

	private String newspaper;// 主题的状态
	private PostOfficeImpl postOffice;// 主题对象

	/**
	 * 构造方法
	 * 
	 * @param postOffice
	 */
	public PersonBImpl(PostOfficeImpl postOffice) {
		this.postOffice = postOffice;

		postOffice.add(this);
	}

	/**
	 * 更新状态
	 */
	public void update(String newspaper) {

		this.newspaper = newspaper;
		display();

	}

	public void display() {

		System.out.println("B观察者接收到状态>>>>>>:" + newspaper);

	}

}
