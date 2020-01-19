import requests, threading, os

def get_req():
    global LIST_OF_COMMANDS
    threading.Timer(1.0, get_req).start()
    r = requests.get('http://13.64.195.175:1200/1')
    rj = r.json()
    #print(rj["commands"])
    LIST_OF_COMMANDS += rj["commands"]
    #print(LIST_OF_COMMANDS)


def run_commands():
    global LIST_OF_COMMANDS
    threading.Timer(6.0, run_commands).start()
    try:
        command = LIST_OF_COMMANDS[0]
        print(command)
        print(LIST_OF_COMMANDS)
        if "Portsche" in command:
            if "Forward" in command:
                #os.system("clear")
                os.system("python3 motors.py forward")
            elif "Left" in command:
                #os.system("clear")
                os.system("python3 motors.py left")
                print("ran left")
            elif "Right" in command:
                #os.system("clear")
                os.system("python3 motors.py right")
                print("ran right")
        LIST_OF_COMMANDS.pop()
            #print(LIST_OF_COMMANDS)
    except:
        print("empty list!")



LIST_OF_COMMANDS = []

t1 = threading.Thread(target=get_req())
t2 = threading.Thread(target=run_commands())
t1.start()
t2.start()
t1.join()
t2.join()
