from dotenv import load_dotenv
import os
import datetime
import json
import tkinter as tk


__version__ = "0.1"

def main():
    lastUsed = json.load(open("lastUsedPass.json"))

    connected = True

    if connected:
        if newWeek(lastUsed):
            password = getPassword()
            print(password)
            # print(Client.WLan(connection).wps())
            #Set security settings werkt nog NIET
            #ToDo Fix wachtwoord
            # print(Client.WLan(connection).set_security_settings(wpa_psk=password)) #auth_mode=AuthModeEnum.WPA2_PSK, wpa_encryption_mode=WpaEncryptModeEnum.MIX,  wifi_restart=True
            updateLastUsed(password)

    else:
        print(getWeekNumber())
        password = lastUsed["password"]
        print('Kon geen verbinding maken met de 4G modem')

    root = tk.Tk()
    root.geometry("500x100")
    root.tk.call('tk', 'scaling', 1.2)
    root.title("WiFi-code")
    root.iconbitmap("icon_black.ico") # .ico logo maken
    uitleg = tk.Label(text="WiFi wachtwoord voor deze week", font="Verdana 20")
    uitleg.pack()
    wifiCode = tk.Label(text=password, font="Verdana 25 bold")
    wifiCode.pack()
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
    passwords = json.load(open("passwords.json"))
    return passwords[getWeekNumber()]

def updateLastUsed(password):
    lastUsed = { 
        "week" : getWeekNumber(), 
        "password" : password
    }
    with open("lastUsedPass.json", "w") as outfile: 
        json.dump(lastUsed, outfile)

if __name__ == "__main__":
    load_dotenv()
    main()