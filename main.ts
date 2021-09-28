input.onButtonPressed(Button.AB, function () {
    liste = [0, 0, 0]
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Valeur 0=" + liste[0])
    serial.writeLine("Valeur 1=" + liste[1])
    serial.writeLine("Valeur 2=" + liste[2])
    if (liste[0] == 1 && (liste[1] == 2 && liste[2] == 3)) {
        basic.showString("Le code est: XXX")
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
        liste = [0, 0, 0]
    }
})
let Value = 0
let liste: number[] = []
liste = [0, 0, 0]
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) <= 100) {
        Value = 1
        basic.showString("" + (Value))
    } else if (pins.analogReadPin(AnalogPin.P0) > 100 && pins.analogReadPin(AnalogPin.P0) <= 200) {
        Value = 2
        basic.showString("" + (Value))
    } else if (pins.analogReadPin(AnalogPin.P0) > 200 && pins.analogReadPin(AnalogPin.P0) <= 300) {
        Value = 3
        basic.showString("" + (Value))
    } else if (pins.analogReadPin(AnalogPin.P0) > 300 && pins.analogReadPin(AnalogPin.P0) <= 500) {
        Value = 4
        basic.showString("" + (Value))
    } else if (pins.analogReadPin(AnalogPin.P0) > 500 && pins.analogReadPin(AnalogPin.P0) <= 900) {
        Value = 5
        basic.showString("" + (Value))
    } else {
        Value = 0
        basic.showString("" + (Value))
    }
    serial.writeLine("Valeur " + Value)
    if (input.buttonIsPressed(Button.A) && liste[0] == 0) {
        liste[0] = Value
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.A) && (liste[0] != 0 && liste[1] == 0)) {
        liste[1] = Value
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.A) && (liste[0] != 0 && liste[1] != 0)) {
        liste[2] = Value
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    }
})
