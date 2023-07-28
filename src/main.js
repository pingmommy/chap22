/**
 * 
 */


//함수를 정의함. 사용하려면 함수를 호출하는 부분이 있어야 한다. 
 function main(){
	 console.log("Start");
	 
	 //isNaN =>함수  Math.random()=>메소드  * 자바는 메소드만 있다. 함수없음. 
	 console.log(isNaN(NaN))
	 console.log(Math.random());
	 
	 for(let i=0; i<10;i++){
		// process.stdout.write(i); => 오류 :   process.stdout.write(문자열)
		  process.stdout.write(i +" ");
	 }
	 
 
	 console.log("End");
	 
	 }
	 
//함수호출. 함수는 어디에 소속되지 않고 단독으로 쓰인다. 	 
	 main();