from calendar import week
from datetime import datetime
from huawei_lte_api.Client import Client
from huawei_lte_api.Connection import Connection
from huawei_lte_api.Session import Session

weeknummer = datetime.now().isocalendar().week
with open('wifiWachtwoorden.txt') as f:
    wachtwoorden = f.readlines()
    f.close()

for i in range(52):
    if len(wachtwoorden[i]) < 8:
        print("WW te kort")
        print(wachtwoorden[i])

print("WW van de week")    
print(wachtwoorden[weeknummer])

# with Connection('http://192.168.8.1/') as connection: For limited access, I have valid credentials no need for limited access
with Connection('http://admin:rumbeke8810@192.168.1.1/') as connection:
    client = Client(connection)
    session = Session('http://admin:rumbeke8810@192.168.1.1/')

    """ print(client.device.information())
    print("/////////////////////////////////////")
    print(client.wlan.multi_security_settings())
    print("/////////////////////////////////////")
    print(client.wlan.multi_security_settings_ex())
    print("/////////////////////////////////////")
    print(client.wlan.multi_basic_settings())
    print("/////////////////////////////////////")
 """
    encryptedPassword = session._encrypt_data(bytes("geluktofniet", "utf-8")).decode("utf-8")
    #encryptedPassword = session._encrypt_data(bytes(wachtwoorden[weeknummer], "utf-8")).decode("utf-8")
    print(encryptedPassword)
    print("/////////////////////////////////////")


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
    print(client.wlan.set_multi_basic_settings(clients=clientsList))