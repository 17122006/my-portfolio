import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyB63zw_GQxaXMHvB59oqpIGNsBFvjIITT0",
  authDomain: "my-portfolio-4acff.firebaseapp.com",
  projectId: "my-portfolio-4acff",
  storageBucket: "my-portfolio-4acff.firebasestorage.app",
  messagingSenderId: "500832553041",
  appId: "1:500832553041:web:8f064c1bdf247c39f9d070",
  measurementId: "G-VE421NJPQV"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  app,
  auth,
  db,
 
};
