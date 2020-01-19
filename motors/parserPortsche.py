import requests, threading, os



def get_req():
    global LIST_OF_COMMANDS
    threading.Timer(1.0, get_req).start() # called every minute
    r = requests.get('http://13.64.195.175:1200/1')
    rj = r.json()
    print(rj["commands"])
    LIST_OF_COMMANDS += rj["commands"]

def run_commands():
    while True:
        try:
            command = LIST_OF_COMMANDS[0]
            if "Portsche" in command:
                if "forward" in command:
                    os.system("motors.py forward")
                if "left" in command:
                    os.system("motors.py left")
                if "right" in command:
                    os.system("motors.py right")
                LIST_OF_COMMANDS.pop()
        except:
            print("empty list!")



LIST_OF_COMMANDS = []
t1 = threading.Thread(target=get_req())
t2 = threading.Thread(target=run_commands())
t1.start()
t2.start()
t1.join()
t2.join()
