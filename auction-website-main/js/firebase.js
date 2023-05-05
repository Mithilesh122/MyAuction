
import { getAuth } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDPmAdd5Bce1uDNnu2pZ1PGjcCpZaKtetk",
    authDomain: "bigbrothers-b59fa.firebaseapp.com",
    projectId: "bigbrothers-b59fa",
    storageBucket: "bigbrothers-b59fa.appspot.com",
    messagingSenderId: "622702517357",
    appId: "1:622702517357:web:60199884afd56a06963364",
    measurementId: "G-813FJX2LD6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
