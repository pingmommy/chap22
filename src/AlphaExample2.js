import Alpha from "./Util/Alpha.js"
import VT100 from "./Util/VT100.js";


VT100.clearScreen();
for(let i=0;i<1000;i++){
	let alpha = new Alpha();
	//console.log(alpha)

	alpha.show();

}
VT100.reset();
VT100.cursorMove(21,1);
VT100.println("program End")