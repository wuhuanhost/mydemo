package Observer;

/**
 * 主题接口
 * 
 * @author test
 * 
 */
public interface PostOffice {

	public void add(Person obs);// 添加观察者的方法

	public void remove(Person obs);// 移除观察者的方法

	public void Notify();// 通知观察者的方法

}
