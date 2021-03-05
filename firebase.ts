import Firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDxGzVk_c8fIjfLVhnRrHdZrB-RtW642G4",
  authDomain: "moveit-e9b31.firebaseapp.com",
  projectId: "moveit-e9b31",
  storageBucket: "moveit-e9b31.appspot.com",
  messagingSenderId: "114324313824",
  appId: "1:114324313824:web:1057750b304a35ea956285",
  measurementId: "G-LX0R3BQ3PV"
};

export default Firebase.initializeApp(firebaseConfig);