import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authentication } from "../api.js/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const useUser = () =>{
const [email, setEmail] = useState("");
const [padlock, setPadlock] = useState("");
const [errorMsg, setErrorMsg] = useState("");
const navigate = useNavigate();

const logarUser = async (e) =>{
    e.preventDefault();
    setErrorMsg("");

    try {
    await signInWithEmailAndPassword(authentication, email, padlock);
    navigate("/studentPage");
    } catch (error) {
        setErrorMsg("Email ou senha inválido: " +error);
    }
};

const logoutUser = async (e) =>{
    e.preventDefault();
    setErrorMsg("");

    try {
        await signOut(authentication);
        navigate("/");
    } catch (error) {
        setErrorMsg("Erro ao desconectar:  " +error);
    }
};

const registerUser = async (e) =>{
    e.preventDefault();
    setErrorMsg("");

    try {
        await createUserWithEmailAndPassword(authentication, email, padlock);
        alert("Cadastro realizado com sucesso. ");
        navigate("/");
    } catch (error) {
        setErrorMsg("Erro ao tentar cadastrar: " +error);
    }
};

return{
email,
setEmail,
padlock,
setPadlock,
errorMsg,
setErrorMsg,
logarUser,
logoutUser,
registerUser,
};
};
export default useUser;