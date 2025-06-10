import react from "react";
import useStudent from "./use/useStudent";
import "./student.css";

const PushStudentPage = () =>{
const {name, setName, email, setEmail, note, setNote, navigate, addStudent} = useStudent();

    return(
        <>
      <  div className="student" tabIndex={1}>
<h6>Novo Aluno</h6>

      <div tabIndex={1}>
        <strong>
            Nome do aluno(a):
        </strong>
      <input
      type="text"
      aria-label="nome"
      value={name}
      onChange={(field) =>{
        setName(field.target.value);
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
            setEmail(field.target.value);
        }}
        />
      </div>

      <div tabIndex={1}>
<strong>
    Nota do aluno(a):
</strong>
<input
type="nutext"
aria-label="nota"
value={note}
onChange={(field) =>{
    setNote(field.target.value);
}}  
/>
      </div>

<div className="student-buttons" tabIndex={1}>
    <button
    onClick={() =>{
addStudent(name, email, note);
    }}>
        Adicionar 
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
export default PushStudentPage;