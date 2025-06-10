import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import otherFunction from "./otherFunction"; // Corrigido o nome da função
import { v4 as uuidv4 } from 'uuid';
import { getAuth } from "firebase/auth";

const useStudent = () => {
    const authentication = getAuth();
const user = authentication.currentUser
    const [listStudents, setListStudents] = useState(() =>{
                const students = localStorage.getItem("listStudents");
        const allStudent = students?JSON.parse(students):[];
        return allStudent.filter(student => student.uid === user.uid);
    });
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");
    const [approved, setApproved] = useState(false);
    const [errorMessage, setErrorMessage] = useState(""); // Estado para mensagens de erro
const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const validateNote = /^\d{1,2}(\.\d)?$/;
    const {print} = otherFunction();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("listStudents", JSON.stringify(listStudents));
    }, [listStudents]); 

    const addStudent = (name, email, note) => {
        setErrorMessage(""); // Limpa mensagens de erro anteriores

        if (name.trim() === "") {
            alert("Campo nome não pode ficar vazio.");
        } else if (email.trim() === "") {
            alert("Campo email não pode ficar vazio.");
        } else if (name.length < 3 || name.length > 30) {
            alert("Nome precisa ter entre 3 e 30 caracteres.");
        }else if(!validateEmail.test(email)) {
            alert("Email inválido: precisa conter arroba e ponto.");
        }else if(!validateNote.test(note) || change.note > 10){
            alert("nota inválida: número não pode ser negativo ou maior que dez. ");
        } else {
            const newStudent = {
                id: uuidv4(),
                name: name,
                email: email,
                note: note,
                approved: false,
uid: user.uid
            };
            const newListStudent = [...listStudents, newStudent];
            setListStudents(newListStudent);
alert("Aluno adicionado com sucesso.");
             navigate("/studentPage");
        }
    };

    const deleteStudent = (id) =>{
        const newListStudent = listStudents.filter(student => student.id !== id);
        setListStudents(newListStudent);
        alert("Aluno excluído com sucesso. ");
        navigate("/studentPage");
    }

const studentDetails = (id) =>{
    const student = listStudents.find(student => student.id === id);
    navigate("/studentDetailsPage", {state:student});
}

const changeStudent = (change) =>{
    if(change.name.trim() === ""){
        alert("Campo nome não pode ficar vazio. ");
    }else if(change.email.trim() === ""){
        alert("Campo email não pode ficar vazio. ");
    }else if(change.name.length < 3 || change.name.length > 30){
        alert("Nome precisa ter entre 3 a 30 caracteres. ");
    }else if(!validateEmail.test(change.email)){
        alert("Email inválido: precisa conter arroba e ponto. ");
    }else if(!validateNote.test(change.note) || change.note > 10){
        alert("Nota inválida: número não pode ser negativo ou maior que dez.");
    }else{
    const newListStudent = listStudents.map((student) =>{
        if(change.id === student.id){
return change;
        }else{
            return student;
        }
});
setListStudents(newListStudent);
alert("Dados do aluno(a) foram alterados. ");
navigate("/studentPage");
}
};

    return {
        listStudents,
        setListStudents,
        name,
        setName,
        email,
        setEmail,
        note,
        setNote,
        approved,
        setApproved,
        addStudent,
        studentDetails,
        deleteStudent,
        changeStudent,
        navigate,
        errorMessage, // Exporta o estado errorMessage para ser usado no componente
    };
};
export default useStudent;