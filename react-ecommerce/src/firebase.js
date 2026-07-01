import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEIKNRn6Iki_v0y_c_0fBXybAb54SIj7Q",
  authDomain: "urban-store-422c6.firebaseapp.com",
  projectId: "urban-store-422c6",
  storageBucket: "urban-store-422c6.firebasestorage.app",
  messagingSenderId: "1096760854355",
  appId: "1:1096760854355:web:341e968a8bc0525ddac3a6",
  measurementId: "G-6KDFK7HM05"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;