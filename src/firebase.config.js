// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAcTe-w1Bw2sSF6PQvIm_OHGkREKdqPAGw',
  authDomain: 'house-marketplace-app-6f96a.firebaseapp.com',
  projectId: 'house-marketplace-app-6f96a',
  storageBucket: 'house-marketplace-app-6f96a.appspot.com',
  messagingSenderId: '598166289404',
  appId: '1:598166289404:web:fe7eb715109034d58a1079',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
