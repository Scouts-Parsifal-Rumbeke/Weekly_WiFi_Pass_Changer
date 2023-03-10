import datetime
import os
import json
import tkinter as tk
from huawei_lte_api.Client import Client
from huawei_lte_api.Connection import Connection
from huawei_lte_api.Session import Session

__version__ = "0.1"

def main():
    root = tk.Tk()
    root.geometry("500x100")
    root.tk.call('tk', 'scaling', 1.2)
    root.title("WiFi-code")
    root.iconbitmap(os.path.dirname(__file__) + "/icon_black.ico") # .ico logo maken
    uitleg = tk.Label(text="Wifi-wachtwoord van deze week", font="Verdana 20")
    uitleg.pack()
    root.update()

    lastUsed = json.load(open(os.path.join(os.path.dirname(__file__), "lastUsedPass.json")))
    if newWeek(lastUsed):
        password = getPassword()
        if(changeWifiPassword(password)):
            updateLastUsed(password)
            connection = True
        else:
            print('Kon geen verbinding maken met de 4G modem')
            connection = False
            
    lastUsed = json.load(open(os.path.join(os.path.dirname(__file__), "lastUsedPass.json")))
    password = lastUsed["password"]
    wifiCode = tk.Label(text=password, font="Verdana 25 bold")
    wifiCode.pack()

    if not connection:
        noConnection = tk.Label(text="Geen verbinding met de modem", font="Verdana 10", fg="red")
        noConnection.pack()
    
    root.mainloop()

def getWeekNumber():
    return datetime.date.today().isocalendar()[1] # isocalendar tupple: year, weeknumber, weekday

def newWeek(lastUsed):
    weekLastChange = lastUsed["week"]
    if getWeekNumber != weekLastChange:
        return True
    else:
        return False

def getPassword():
    passwords = json.load(open(os.path.join(os.path.dirname(__file__), "passwords.json")))
    return passwords[getWeekNumber()]

def updateLastUsed(password):
    lastUsed = { 
        "week" : getWeekNumber(), 
        "password" : password
    }
    with open(os.path.join(os.path.dirname(__file__), "lastUsedPass.json"), "w") as outfile: 
        json.dump(lastUsed, outfile)

def changeWifiPassword(password):
    try:
        with Connection('http://admin:rumbeke8810@192.168.1.1/') as connection:
            client = Client(connection)
            session = Session('http://admin:rumbeke8810@192.168.1.1/')

            encryptedPassword = session._encrypt_data(bytes(password, "utf-8")).decode("utf-8")
            #print(encryptedPassword)

            clientsList = [{
                'Index': 0,
                'WifiBroadcast': 0,
                'wifiguestofftime': 4,
                'WifiAuthmode': "WPA2-PSK",
                'ID': "InternetGatewayDevice.X_Config.Wifi.Radio.1.Ssid.1.",
                'WifiEnable': 1,
                'wifiisguestnetwork': 0,
                'WifiMac': "BC:1A:E4:0C:1A:9E",
                'WifiSsid': "Scouts Rumbeke",
                'WifiWpaencryptionmodes': "AES",
                'WifiWepKeyIndex': 1,
                'MixWifiWpapsk': encryptedPassword,
                'WifiWpapsk': encryptedPassword,
            },{
                'Index': 5,
                'WifiBroadcast': 0,
                'wifiguestofftime': 4,
                'WifiAuthmode': "WPA2-PSK",
                'ID': "InternetGatewayDevice.X_Config.Wifi.Radio.2.Ssid.1.",
                'WifiEnable': 1,
                'wifiisguestnetwork': 0,
                'WifiMac': "BC:1A:E4:0C:1A:A3",
                'WifiSsid': "Scouts Rumbeke",
                'WifiWpaencryptionmodes': "AES",
                'WifiWepKeyIndex': 1,
                'MixWifiWpapsk': encryptedPassword,
                'WifiWpapsk': encryptedPassword,

            }]
            if(client.wlan.set_multi_basic_settings(clients=clientsList) == "OK"):
                return True
            else:
                return False
    except:
        return False
    
if __name__ == "__main__":
    main()