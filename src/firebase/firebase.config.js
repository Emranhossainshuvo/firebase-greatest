import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-EWpBE5M_CQGDUj3FrbZQgNNuNUPAGUk",
  authDomain: "auth-moha-milon-527a8.firebaseapp.com",
  projectId: "auth-moha-milon-527a8",
  storageBucket: "auth-moha-milon-527a8.appspot.com",
  messagingSenderId: "264312205078",
  appId: "1:264312205078:web:51bd233694d41f819baa37"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth; 
