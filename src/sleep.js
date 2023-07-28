
import sleep from 'es7-sleep' // 모듈은 확장자 주지 말고 {} 이거 안 해도 된다. 

async function main(){
	console.log("Start ...");
	
	for(let i=0;i<10;i++){
	await sleep(1000)
	console.log(i);
	
	}
	
	console.log("End ...");
	
}

main();