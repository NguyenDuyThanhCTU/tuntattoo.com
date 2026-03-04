import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDHCfXI9e9wLeeurLCWZtZs-yrOgyuBD3A",

  authDomain: "xedienmientay-cb391.firebaseapp.com",

  projectId: "xedienmientay-cb391",

  storageBucket: "xedienmientay-cb391.appspot.com",

  messagingSenderId: "243732705122",

  appId: "1:243732705122:web:842cddd595f562fec0863b",

  measurementId: "G-CYY7VH3JJ7",
};

const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export const auth = getAuth(app);
