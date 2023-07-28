

//자바에서는 (int)로 캐스팅을 하면 됐지만 스크립트에서는 캐스팅기능이 없음. 
//스크립트에서 형변환을 원하면 PARSEINT함수를 쓰자. 


for(let i=0; i<10; i++){
let line = parseInt(Math.random()*20+1)
let cloumn = parseInt(Math.random()*40+1)
let fg = parseInt(Math.random()*8+30)
let bg = parseInt(Math.random()*8+40)


//스크립트에서는 char타입이 없는데, 알파벳을 랜덤하게 출력하려면? 

let ch = parseInt(Math.random()*26+"A"[0].charCodeAt()) // => 현재 ch는 int타입
//정수를 문자열로 바꾸는 메소드 
ch=String.fromCharCode(ch); // => 여기서 ch는 String 타입

/*
"A"[0].charCodeAt() => charCodeAt()메소드는 인스턴트요소. "A"[0]에 종속되어 있는데 "A"[0]가 인스턴스 배열이기 때문에

fromCharCode() => fromCharCode()메소드는 스태틱요소 String클래스에 종속되어 호출되었기 때문에
 */



//ctrl shoft c 가 주석처리 
console.log(`[${line},${cloumn},${fg},${bg},${ch}]`);

}

//System.out.println("adfasdfasdf".charAt(3)); => 자바에서 인덱스로 문자열에서 문자 하나를 출력할 때
console.log("ABCDE"[1])