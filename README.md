# WiFiChanger - Huawei LTE Router

Wijzigt wekelijks het wachtwoord van de Huawei 4G modem (B525).  
Maakt gebruik van [Salamek/huawei-lte-api](https://github.com/Salamek/huawei-lte-api) package. Voor de GUI werd er [tkinter](https://docs.python.org/3/library/tkinter.html) gebruikt. Vervolgens gecompileerd met [Nuitka](https://nuitka.net/).

## Werking

* Bij opstarten van het programma checkt het of er een nieuwe week is begonnen
* Wijzigt wachtwoord met behulp van de API
* GUI toont huidig wachtwoord. Oud of nieuw afhankelijk of het wijzigen geslaagd is.
  
## Handige info

* WiFi-wachtwoord wordt adhv RSA geëncrypteerd om dan als een string verstuurd te worden
  * Hawei-lte-api package heeft een RSA encrypt functie: `session._encrypt_data(BYTES)`
* API maakt gebruik van .xml requests
* API endpoint: `wlan/set_multi_basic_settings`  

## DEV Environment

* Virtual environment aanmaken: `python -m venv ./venv`
* VENV activeren: `.\venv\Scripts\activate`
* De nodige modules downloaden: `pip install --no-cache-dir -r requirements.txt --upgrade`
* `python ./main.py`
  
## NUITKA

* `python -m nuitka --version` Control installation
* `python -m nuitka --onefile --disable-console --windows-icon-from-ico=icon_scouts.ico --enable-plugin=tk-inter --include-data-files="*.ico=./" --include-data-files="*.json=./" .\main.py`