from huawei_lte_api.Client import Client
from huawei_lte_api.Connection import Connection

# with Connection('http://192.168.8.1/') as connection: For limited access, I have valid credentials no need for limited access
with Connection('http://admin:rumbeke8810@192.168.1.1/') as connection:
    client = Client(connection) # This just simplifies access to separate API groups, you can use device = Device(connection) if you want

    print(client.device.signal())  # Can be accessed without authorization
    print("/////////////////////////////////////")
    print(client.device.information())  # Needs valid authorization, will throw exception if invalid credentials are passed in URL
    print("/////////////////////////////////////")
    print(client.device.features())


# For more API calls just look on code in the huawei_lte_api/api folder, there is no separate DOC yet
