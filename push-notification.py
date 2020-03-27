import requests


url = "https://fcm.googleapis.com/fcm/send"

# connect to moi_bit db
# get list of users
#  
# get their FCM token
# iterate through the list of tokens and see if lastNotificationSent >=3hr (3*60*60) 
# if yes , call sendNotification method and pass on the token , 
# else skip

# if going international , make sure all your timestamps are in UTC


def sendNotification(token):
    payload = "{\n    \"to\": \"ccZ4AtQgNsI:APA91bGMFmFxTpI1VpDHuY8D5e3v9u6U0fumXteXp74Uoe-cGAssVylVNX6bmM39Mmn374RlClSAmMSaRZs5z7QZUQyknGSMFUKExtFwEbW4YaKeQ7S7ZY8cUK4hoxBMMsM4a-WbDDYP\",\n    \"notification\": {\n      \"title\": \"Tracy\",\n      \"body\": \"Go for checkup\",\n      \"mutable_content\": true,\n      \"sound\": \"Tri-tone\"\n      },\n\n   \"data\": {\n    \"url\": \"\",\n    \"dl\": \"\"\n      }\n}"
    headers = {
        'Authorization': "key=AAAAMfiafLk:APA91bE1-CCy8BCed7tWZJKOxPsaSRL_xiQzJ5UsoHOHyoTBdbRoETIeoqU8GGiBU06EnhQl38TNo2pystseVOcNXjUorPFIL41aoRisp9RJbKKjspWMmlspmusgZjIMnuAEcr9WGyzx",
        'Content-Type': "application/json",
        'Cache-Control': "no-cache",
        'Postman-Token': "5555a695-e23e-4b10-ac82-9494f42f2c2f"
        }

    response = requests.request("POST", url, data=payload, headers=headers)

    print(response.text)

    if(response.statsCode == 200):
        # update the lastNotificationSent = DateTime.now() 
        # update user profile with above time on moi-bit
        print("UPdated")