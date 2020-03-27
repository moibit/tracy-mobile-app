## https://firebase.googleblog.com/2017/07/accessing-database-from-python-admin-sdk.html

import requests
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
import json


duplicateChecker={}
# TODO : move configs to remote config
def sendNotification(token):
    url = "https://fcm.googleapis.com/fcm/send"

    payload = "{\n    \"to\": \""+token+"\",\n    \"notification\": {\n      \"title\": \"Tracy\",\n      \"body\": \"Send us a selfie\",\n      \"mutable_content\": true,\n      \"sound\": \"Tri-tone\"\n      },\n\n   \"data\": {\n    \"url\": \"\",\n    \"dl\": \"\"\n      }\n}"
    headers = {
        'Authorization': "key=AAAAMfiafLk:APA91bE1-CCy8BCed7tWZJKOxPsaSRL_xiQzJ5UsoHOHyoTBdbRoETIeoqU8GGiBU06EnhQl38TNo2pystseVOcNXjUorPFIL41aoRisp9RJbKKjspWMmlspmusgZjIMnuAEcr9WGyzx",
        'Content-Type': "application/json",
        'Cache-Control': "no-cache",
        'Postman-Token': "5555a695-e23e-4b10-ac82-9494f42f2c2f"
        }

    response = requests.request("POST", url, data=payload, headers=headers)

    print(response.text)

    # if(response.statsCode == 200):
    #     # update the lastNotificationSent = DateTime.now() 
    #     # update user profile with above time on moi-bit
    #     print("UPdated")



cred = credentials.Certificate('tracy-mobile-app-firebase-adminsdk-zoirc-9eaa9c874a.json')
firebase_admin.initialize_app(cred, {
    'databaseURL' : 'https://tracy-mobile-app.firebaseio.com/'
})

users = str(db.reference('databases').get())
users = users.replace("\'", "\"")

users=json.loads(users)
#print(users)
print("Got",str(len(users["notifications"]["documents"])), "users")
for tokens in users["notifications"]["documents"]:
    #print(len(users["notifications"]["documents"][tokens].keys()))
    for uuid in users["notifications"]["documents"][tokens].keys():
        try:
            token=users["notifications"]["documents"][tokens][uuid]["token"]
            #print(token)
            if(token not in duplicateChecker.keys()):
                sendNotification(token)
                duplicateChecker[token]=1
            else:
                print("Notification to this user was already sent")
        except:
            print("no idea what went wrong")
# connect to moi_bit db
# get list of users
#  
# get their FCM token
# iterate through the list of tokens and see if lastNotificationSent >=3hr (3*60*60) 
# if yes , call sendNotification method and pass on the token , 
# else skip

# if going international , make sure all your timestamps are in UTC
