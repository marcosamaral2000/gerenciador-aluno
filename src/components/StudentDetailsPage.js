import react, { useState } from "react";
import useStudent from "./use/useStudent";
import { useLocation } from "react-router-dom";
import "./student.css";

const StudentDetailsPage = () =>{
const location = useLocation();
const student = location.state||{};
const {changeStudent, navigate} = useStudent();
const [name, setName] = useState(student.name);
const [email, setEmail] = useState(student.email);
const [note, setNote] = useState(student.note);
const [approved, setApproved] = useState(student.approved);

const editedDataStudent = () =>{
const newDate = {
    ...student,
    name: name,
    email: email,
    note: note,
    approved: approved
};
changeStudent(newDate);
};

    return(
        <>
        <div className="student" tabIndex={0}>
            <p>Detalhes do estudante</p>

          <div tabIndex={1}>
        <strong>
            Nome do aluno(a):
        </strong>
      <input
      type="text"
      aria-label="nome"
      value={name}
      onChange={(field) =>{
        setName(field.target.value)
      }}
      />
      </div>

      <div tabIndex={1}>
        <strong>
            Email do aluno(a):
        </strong>
        <input
        type="email"
        aria-label="email"
        value={email}
        onChange={(field) =>{
            setEmail(field.target.value)
        }}
        />
      </div>

      <div tabIndex={1}>
<strong>
    Nota do aluno(a):
</strong>
<input
type="number"
aria-label="nota"
value={note}
onChange={(field) =>{
    setNote(field.target.valu)
}}
/>
</div>        

<div tabIndex={1}>
    <strong>
        Aluno(a) aprovado(a):
    </strong>
<label>
        <input
    type="radio"
name="aprovado(a)"
aria-label="SIM"
value={true}
checked={approved===true}
onChange={(field) =>{
    setApproved(JSON.parse(field.target.value));
}}
/>
<span>SIM</span>
    </label>    

    <label>
        <input
    type="radio"
name="aprovado(a)"
aria-label="NÃO"
value={false}
checked={approved===false}
onChange={(field) =>{
    setApproved(JSON.parse(field.target.value));
}}
/>
<span>NÃO</span>
    </label>    
</div>

<div className="student-buttons" tabIndex={1}>
    <button
    onClick={() =>{
        editedDataStudent();
    }}>
        Alterar dados
    </button>

<button onClick={() =>{
navigate("/modalPage", {state:student});
}}>
    Excluir
</button>

    <button
    onClick={() =>{
navigate("/studentPage");
    }}>
Voltar
    </button>
</div>  
        </div>
        </>
    );
};
export default StudentDetailsPage;