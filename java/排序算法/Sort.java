package com.datainfo.test;

/**
 * 
 * @author will
 * 
 */
public class Sort {

	/**
	 * 插入排序
	 * 
	 * @param data
	 */
	public static void insertionSort(int[] data) {
		for (int index = 1; index < data.length; index++) {// 循环从数组第二个元素开始
			int temp = data[index];// 取出当前外层循环的数组下标的值
			int position = index;// 取出当前外层循环的数组下标
			// 如果外层循环的数组的下标大于0，并且当前下标的前一个数比当前下标大
			while (position > 0 && data[position - 1] > temp) {
				data[position] = data[position - 1];//
				position--;
			}
			data[position] = temp;
			System.out.print("第" + (index) + "次排序结果：");
			for (int a = 0; a < data.length; a++) {
				System.out.print(data[a] + "\t");
			}
			System.out.println("");
		}
	}

	/**
	 * 冒泡排序
	 * 
	 * @param data
	 */
	public static void bubbleSort(int[] data) {

		for (int i = 0; i < data.length - 1; i++) { // 最多做n-1趟排序
			for (int j = 0; j < data.length - 1 - i; j++) { // 对当前无序区间data[0......length-i-1]进行排序(j的范围很关键，这个范围是在逐步缩小的)
				if (data[j] > data[j + 1]) {// 把小的值交换到前面
					int temp = data[j];
					data[j] = data[j + 1];
					data[j + 1] = temp;
				}
			}
			System.out.print("第" + (i + 1) + "次排序结果：");
			for (int a = 0; a < data.length; a++) {
				System.out.print(data[a] + "\t");
			}
			System.out.println("");
		}

	}

	/**
	 * 选择排序
	 * 
	 * @param array
	 */
	public static void selectSort(int[] data) {
		int temp;
		int min;// min存放最小元素的index
		for (int index = 0; index < data.length - 1; index++) {
			// 假定第一个元素为最小元素
			min = index;

			// 循环遍历元素，每遍历一个元素，与当前最小元素比较，若此元素比当前最小元素小，则将此元素置为最小元素
			for (int time = index + 1; time < data.length; time++) {
				if (data[time] < data[min]) {
					min = time;
				}
			}
			// 遍历一遍，找到一个最小元素，把此最小元素的index与min交换位置
			temp = data[index];
			data[index] = data[min];
			data[min] = temp;

			System.out.print("第" + (index + 1) + "次排序结果：");
			for (int a = 0; a < data.length; a++) {
				System.out.print(data[a] + "\t");
			}
			System.out.println("");
		}
	}

	public static void main(String[] args) {
		int[] c = { 4, 9, 23, 1, 45, 27, 5, 2, 5, 6, 9, 8, 11, 156 };
		selectSort(c);
		System.out.println("--------------------------------------------------------------------------------------------------------------------");
		System.out.print("最终排序结果：");
		for (int a = 0; a < c.length; a++) {
			System.out.print(c[a] + "\t");
			
		}
	}

}
