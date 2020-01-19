import requests
import os
import time

url = "http://13.64.195.175:1200/donate/"

payload = {}
headers= {}

response = requests.request("GET", url, headers=headers, data = payload)

donate = response.json()['donations']

print(donate)

for i in range(0, donate):
    os.system('./openTab.sh')
    time.sleep(5)
    os.system('./exit.sh')

    
