#DC MOTOR
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(16,GPIO.OUT)
GPIO.output(16,GPIO.HIGH)
time.sleep(3)
GPIO.output(16,GPIO.LOW)

#SERVO MOTOR
GPIO.setup(11,GPIO.OUT)
p = GPIO.PWM(11,50)
p.start(0)
p.ChangeDutyCycle(3)
time.sleep(3)
p.ChangeDutyCycle(12)
time.sleep(3)
p.stop()

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

GPIO.cleanup()	






