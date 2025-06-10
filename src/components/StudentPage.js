import React from "react";
import useStudent from "./use/useStudent";
import "./student.css";

const StudentPage = () => {
      const {listStudents, studentDetails, navigate} = useStudent();

  return (
    <>
      <div className="student" tabIndex={1}>
        <h6>Meus Alunos: {listStudents.length}</h6>

                <button
          onClick={() => {
            navigate("/pushStudentPage");
          }}>
          Novo Aluno
        </button>

        {listStudents.length===0?(
          <p>Lista de estudante vazia.</p>
        ):(
          listStudents.map((student) =>(
            <div key={student.id} tabIndex={1}> 
              <p
              onClick={() =>{
studentDetails(student.id);
              }}>
                {student.name}
                </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};
export default StudentPage;