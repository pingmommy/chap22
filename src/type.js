
// 자바라면 두 수의 타입이 전혀 달랐겠지만 자바스크립트에서는 같다. 
 console.log(typeof 100);
 console.log(typeof 100.5);
 
 //자바에서는 정수 나눗셈이지만 자바스크립트에서는 실수나눗셈. 결과값이 3.333333...이 된다. 
 console.log(10/3);
 
 //자바스크립트에서 정수표현법
 console.log(typeof 100n); //결과:bigint
 
 //정수나눗셈
 console.log(10n/3n);//결과:3n
 console.log(parseInt(10n/3n));//결과:3
 
 // 둘 다 String 자바스크립트에서는 type char가 없다. 
 console.log(typeof 'A') 
 console.log(typeof "A")
 
 
 //back Tip `` (tab key 위에 있음) => 멀티라인을 표현할 수 있다.  
 console.log(typeof`
 
 자바에서 멀티라인을 구현하고 싶다면
  """안녕 """ 이렇게 쓰면 됩니다^^
 
 hello world
 java master 
 
 ${10+5} =>이걸 문자열로 포현하지 않고 문자열 안에서 연산식으로 이해한다.
 그래서 결과값이  ${10+5} 로 출력되지 않고 15로 출력된다. 
 
 `)
 
 const num = 100;
 console.log(num);
 num=200;
 