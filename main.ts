let value = 0
// This makes sure the numbers are constantly showing.
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P1)
    // This shows how hard you pressed it.
    basic.showNumber(value)
    if (value < 500) {
        basic.showLeds(`
            . # . # .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
