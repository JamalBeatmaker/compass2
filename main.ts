let graus = 0
basic.forever(function () {
    graus = input.compassHeading()
    if (graus >= 0 && graus < 44) {
        basic.showString("N")
    } else if (graus > 45 && graus <= 89) {
        basic.showString("NE")
    } else if (graus > 45 && graus <= 89) {
        basic.showString("L")
    } else {
    	
    }
})
