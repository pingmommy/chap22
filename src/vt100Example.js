import VT100 from "./Util/VT100.js";


VT100.clearScreen()


VT100.cursorMove(10,20)
VT100.setForeground(31)
VT100.setBackground(44)
VT100.print("hello")



VT100.cursorMove(15,10)
VT100.setForeground(34)
VT100.setBackground(41)
VT100.print("world")

VT100.reset()
VT100.cursorMove(21,1)

VT100.println("end")