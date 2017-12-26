package Observer;

import java.util.ArrayList;
import java.util.List;

/**
 * 主题实现类（邮局对象）
 * 
 * @author test
 * 
 */
public class PostOfficeImpl implements PostOffice {

	List<Person> list;// 观察者集合
	String newspaper;// 主题的状态，报纸南方周末

	/**
	 * 主题发生变化，通知观察者
	 */
	public void setNewspaper(String newspaper) {
		System.out.println("观察者的状态:" + newspaper);
		this.newspaper = newspaper;
		Notify();
	}

	/**
	 * 构造方法
	 */
	public PostOfficeImpl() {
		list = new ArrayList<Person>();
	}

	/**
	 * 添加观察者
	 */
	public void add(Person obs) {
		list.add(obs);
	}

	/**
	 * 移除观察者
	 */
	public void remove(Person obs) {
		int i = list.indexOf(obs);
		if (i > 0) {
			list.remove(i);
		}

	}

	/**
	 * 更新消息
	 */
	public void update() {
		for (Person obs : list) {
			obs.update(newspaper);
		}
	}

	/**
	 * 通知观察者
	 */
	public void Notify() {
		update();
	}

}
