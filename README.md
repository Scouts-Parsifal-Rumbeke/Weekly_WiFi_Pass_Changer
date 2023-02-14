# WiFiChanger - Huawei LTE Router
Maakt gebruik van [Salamek/huawei-lte-api](https://github.com/Salamek/huawei-lte-api) package


## Handige info
* WiFi-wachtwoord wordt adhv RSA geëncrypteerd om dan als een string verstuurd te worden
  * Hawei-lte-api package heeft een RSA encrypt functie: `session._encrypt_data(BYTES)`
* API maakt gebruik van .xml requests
* API endpoint: `wlan/set_multi_basic_settings`

