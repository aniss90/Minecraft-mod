function openWebsite(url) {
  window.open(url, "_blank");
}

function onClick() {
  var audio = new Audio('sounds/button_click.ogg');
  audio.play();
}
// تأكد من استيراد Firebase بشكل صحيح
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBf-HKpI4G5p6E0xP1OHGLxtDTGwE_0gg0",
  authDomain: "minecraft-community-4fd3d.firebaseapp.com",
  projectId: "minecraft-community-4fd3d",
  storageBucket: "minecraft-community-4fd3d.firebasestorage.app",
  messagingSenderId: "550140131027",
  appId: "1:550140131027:web:a5186726cf5372e138c626",
  measurementId: "G-F18SFG2LMZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// تصدير الدوال اللازمة للاستخدام في أماكن أخرى
export { db, collection, addDoc, onSnapshot };