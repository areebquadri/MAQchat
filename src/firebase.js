import firebase from "firebase/app";
import "firebase/auth";


export const auth=firebase.initializeApp({
        apiKey: "AIzaSyCIesnhSOUXwJD7xxs_Sdzu_JjIOzZYDUU",
        authDomain: "maqchat-4e279.firebaseapp.com",
        projectId: "maqchat-4e279",
        storageBucket: "maqchat-4e279.appspot.com",
        messagingSenderId: "248938087254",
        appId: "1:248938087254:web:f7120b2a333a33dedc0cf7"
      
}).auth();