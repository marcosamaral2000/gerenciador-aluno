import { getAI } from "firebase/ai";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXZ8ESz5AZIZAyVH7t9AtPejTakUe2eZU",
  authDomain: "gerenciador-aluno.firebaseapp.com",
  projectId: "gerenciador-aluno",
  storageBucket: "gerenciador-aluno.firebasestorage.app",
  messagingSenderId: "602736177633",
  appId: "1:602736177633:web:7334802ea90cdedb2e62a0"
};

const app = initializeApp(firebaseConfig);
const authentication =  getAuth(app);
export {authentication};