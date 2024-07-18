// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCjIH_a-56P-nnZfjzMXTpdDE4Tp8jBiTQ",
    authDomain: "utilityapp-96640.firebaseapp.com",
    projectId: "utilityapp-96640",
    storageBucket: "utilityapp-96640.appspot.com",
    messagingSenderId: "309703104528",
    appId: "1:309703104528:web:00653d34fe259574691295"
};

let app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

