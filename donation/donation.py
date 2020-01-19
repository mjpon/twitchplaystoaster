import requests
import os
import time
import threading


def set_interval(func, sec):
    def func_wrapper():
        set_interval(func, sec)
        func()
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t

def donate():
    url = "http://13.64.195.175:1200/donate/"

    payload = {}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)

    donate = response.json()['donations']

    print(donate)

    if donate:
        for i in range(0, donate):
            os.system('./openTab.sh')
            time.sleep(5)
            os.system('./exit.sh')
    



if __name__ == "__main__":
    set_interval(donate, 10)
    
