import React, { useEffect } from 'react';
import PushNotification from 'react-native-push-notification';
import firebase from 'react-native-firebase';

const RemotePushController = () => {
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: async function(token) {
        console.log('TOKEN:', token);
        // add this token to user profile on moi-bit
        var ref = firebase.database().ref("/databases/notifications/documents");
        await ref.push({token});

      },
// (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('REMOTE NOTIFICATION ==>', notification)
// process the notification here
      },
      // Android only: GCM or FCM Sender ID
      senderID: '186863251968',
      popInitialNotification: true,
      requestPermissions: true
    })
  }, [])
return null
}
export default RemotePushController 