

public class EpochTime0731Practice {
	
	public static void main(String[] args) {
		
		long epoch = System.currentTimeMillis();
		
		System.out.println("millisecond :"+epoch);
		
		//밀리초에서 초로 환산
		epoch = epoch/1000;
		System.out.println("second :"+epoch);
		
		epoch=epoch/60;
		System.out.println("minute :"+epoch);
		
		
		
		double h =epoch/60.0;
		System.out.println("hour :"+h);
		
		h =h%60;
		System.out.println("hour2 :"+h);

		System.out.println("epoch :"+epoch);
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
//		epoch=epoch/24;
//		System.out.println("day :"+epoch);
//	
//		epoch=epoch/30;
//		System.out.println("month :"+epoch); //31일인 달이 있음
//		
//		epoch=epoch/12;
//		System.out.println("year :"+epoch); // 윤년 평년 처리해야 함. 
//		
//		long thisYear = epoch +1970;
//		
//		System.out.println(thisYear);


		
		
		
	}

}
