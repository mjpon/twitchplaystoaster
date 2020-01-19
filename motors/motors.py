import threading, sys

#DC MOTOR
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

def spinMotor(pin):
	GPIO.setup(pin,GPIO.OUT)
	GPIO.output(pin,GPIO.HIGH)
	time.sleep(3)
	GPIO.output(pin,GPIO.LOW)

if __name__ == "__main__":

	left = 11
	right = 16

	args = str(sys.argv[1])
	print(args)

	if args == "forward":
		t1 = threading.Thread(target=spinMotor, args=(11,))
		t2 = threading.Thread(target=spinMotor, args=(16,))
		t1.start()
		t2.start()
		t1.join()
		t2.join()
	elif args == "left":
		spinMotor(left)
	elif args == "right":
		spinMotor(right)

	##TODOS
	##ADD SPECIAL
	##ADD LEDS
