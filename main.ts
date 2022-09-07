maqueen.IR_callbackUser(function ({ myparam: message }) {
    if (message == 18) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 100)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 100)
    } else if (message == 30) {
        maqueen.motorStopAll()
    }
})
basic.forever(function () {
    basic.showNumber(maqueen.IR_read())
})
