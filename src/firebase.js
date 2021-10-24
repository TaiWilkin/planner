import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5WOtA5FoGGVVteWWtdp2USKygIiSHyW4",
  authDomain: "planner-dff98.firebaseapp.com",
  projectId: "planner-dff98",
  storageBucket: "planner-dff98.appspot.com",
  messagingSenderId: "648100518842",
  appId: "1:648100518842:web:e6b37e2ffe3b0faeb39b83",
  measurementId: "G-86G8TWLC9Y"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;
