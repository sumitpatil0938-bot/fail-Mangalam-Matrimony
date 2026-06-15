import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDm5NApFlqbYmrY5savzgbf1uyJk-dx33k",
  authDomain: "mangalam-matrimony-7f492.firebaseapp.com",
  projectId: "mangalam-matrimony-7f492",
  storageBucket: "mangalam-matrimony-7f492.firebasestorage.app",
  messagingSenderId: "227260792737",
  appId: "1:227260792737:web:c028a5be87a510aad2d5e0",
  measurementId: "G-C0J50HEL01"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleBtn = document.getElementById("google-login");

googleBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    localStorage.setItem("userName", result.user.displayName);
    localStorage.setItem("userEmail", result.user.email);

    window.location.href = "dashboard.html";

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});