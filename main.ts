function B_function () {
    basic.clearScreen()
    basic.showArrow(ArrowNames.East)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 90)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        A_function2()
    } else if (receivedNumber == 1) {
        B_function()
    } else if (receivedNumber == 2) {
        AB_function()
    } else if (receivedNumber == 3) {
    	
    } else {
    	
    }
})
function A_function2 () {
    basic.clearScreen()
    basic.showArrow(ArrowNames.South)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
}
function AB_function () {
    basic.clearScreen()
    basic.showIcon(IconNames.No)
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
}
radio.setGroup(1)
