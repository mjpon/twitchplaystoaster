import RPi.GPIO as GPIO
import time
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)
#STEPPER
control_pins = [7,11,13,15]

for pin in control_pins:
        GPIO.setup(pin, GPIO.OUT)
        GPIO.output(pin,0)

halfstep_seq = [
        [1,0,0,0],
        [1,1,0,0],
        [0,1,0,0],
        [0,1,1,0],
        [0,0,1,0],
        [0,0,1,1],
        [0,0,0,1],
        [1,0,0,1]
]

for i in range(512):
        for half in range(8):
                for pin in range(4):
                        GPIO.output(control_pins[pin],halfstep_seq[half][pin])
        time.sleep(0.001)

