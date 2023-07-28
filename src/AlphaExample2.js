import { sprintf } from "sprintf-js";
import Alpha from "./Util/Alpha.js"
import VT100 from "./Util/VT100.js";
import sleep from 'es7-sleep'

async function main(){
	
	VT100.clearScreen();
for(let i=0;i<1000;i++){
	let alpha = new Alpha();
	
	alpha.show();
	await sleep(10);
	
	
	VT100.cursorMove(1,41)
	VT100.reset()
	VT100.print(sprintf("foreCount=[%04d] ",i))
	//alpha.hide();

}
VT100.reset();
VT100.cursorMove(21,1);
VT100.println("program End")
	
}

main();
