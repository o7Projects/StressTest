importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyCE927XKjw7ghk4FQoqyD27x1k8vCrC7ro",
  authDomain: "o7therapy.firebaseapp.com",
  databaseURL: "https://o7therapy.firebaseio.com",
  projectId: "o7therapy",
  storageBucket: "o7therapy.appspot.com",
  messagingSenderId: "17173776277",
  appId: "1:17173776277:web:b274d22d768d052fd3589c",
  measurementId: "G-NCVQN9H6W5"
});
const messaging = firebase.messaging();
//messaging.onTokenRefresh(() => {
    //messaging.getToken().then((refreshedToken) => {
      //console.log('Token refreshed.');
      // Indicate that the new Instance ID token has not yet been sent to the
      // app server.
     // setTokenSentToServer(false);
      // Send Instance ID token to app server.
     // sendTokenToServer(refreshedToken);
      // ...
    //}).catch((err) => {
     // console.log('Unable to retrieve refreshed token ', err);
    //  showToken('Unable to retrieve refreshed token ', err);
    //});
 // });