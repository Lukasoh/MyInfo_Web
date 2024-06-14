
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQmDf7zk9i3jy9o_A4aUKAuaXt416AcH4",
  authDomain: "developer-portfolio-58aa0.firebaseapp.com",
  databaseURL: "https://developer-portfolio-58aa0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "developer-portfolio-58aa0",
  storageBucket: "developer-portfolio-58aa0.appspot.com",
  messagingSenderId: "910808099800",
  appId: "1:910808099800:web:986eeffabcba4ebdfb60ad",
  measurementId: "G-9B9HXK42JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);