package Observer;

public class Test {

	public static void main(String[] args) {

		PostOfficeImpl postOffice = new PostOfficeImpl();// 实例化主体对象

		PersonAImpl pA = new PersonAImpl(postOffice);// 实例化观察者对象A，并且将它加入到主题中
		PersonBImpl pB = new PersonBImpl(postOffice);// 实例化观察者对象B，并且将它加入到主题中

		postOffice.setNewspaper("南方周末已经更新");// 修改主题的状态

	}

}
