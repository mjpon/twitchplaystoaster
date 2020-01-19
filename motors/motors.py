import threading, sys

#DC MOTOR
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(11,GPIO.OUT)
p = GPIO.PWM(11,50)
p.start(0)
SERVO_SLEEP_TIME = 3
WHEEL_SLEEP_TIME = 3

def spinMotor(pin, dir):
	print(dir)

	if dir == "left":
		#SERVO MOTOR
		p.ChangeDutyCycle(7.5)
		#time.sleep(1)
		p.ChangeDutyCycle(6.5)
		time.sleep(SERVO_SLEEP_TIME)
		p.ChangeDutyCycle(7.5)
		#time.sleep(1)
	elif dir == "right":
		p.ChangeDutyCycle(7.5)
		#time.sleep(1)
		p.ChangeDutyCycle(8.5)
		time.sleep(SERVO_SLEEP_TIME)
		p.ChangeDutyCycle(7.5)
		#time.sleep(1)
	elif dir == "forward":
		GPIO.setup(pin,GPIO.OUT)
		GPIO.output(pin,GPIO.HIGH)
		time.sleep(WHEEL_SLEEP_TIME)
		GPIO.output(pin,GPIO.LOW)
	else:
		print("ERROR ERROR")

if __name__ == "__main__":

	left = 13
	right = 16

	args = str(sys.argv[1])
	print(args)

	if args == "forward":
		dir = "forward"
		t1 = threading.Thread(target=spinMotor, args=(13,"forward",))
		t2 = threading.Thread(target=spinMotor, args=(16,"forward",))
		t1.start()
		t2.start()
		t1.join()
		t2.join()
	elif args == "left":
		dir = "left"
		t0 = threading.Thread(target=spinMotor, args=(13,"left",))
		t1 = threading.Thread(target=spinMotor, args=(13,"forward",))
		t2 = threading.Thread(target=spinMotor, args=(16,"forward",))
		t0.start()
		t1.start()
		t2.start()
		t0.join()
		t1.join()
		t2.join()
	elif args == "right":
		dir = "right"
		t0 = threading.Thread(target=spinMotor, args=(13,"right",))
		t1 = threading.Thread(target=spinMotor, args=(13,"forward",))
		t2 = threading.Thread(target=spinMotor, args=(16,"forward",))
		t0.start()
		t1.start()
		t2.start()
		t0.join()
		t1.join()
		t2.join()

	##TODOS
	##ADD SPECIAL
	##ADD LEDS
