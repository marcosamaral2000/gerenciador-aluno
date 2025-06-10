import react from "react";
import useStudent from "./use/useStudent";
import { useLocation } from "react-router-dom";
import "./student.css";

const ModalPage = () =>{
    const location = useLocation();
    const student = location.state||{};
const {deleteStudent, navigate} = useStudent();

    return(
<>
<div className="student-alert" tabIndex={1}>
    <p >
        Realmente deseja excluir... {student.name}?
</p>

    <div className="student-buttons" tabIndex={1}>
        <button
        onClick={() =>{
deleteStudent(student.id);
        }}>
            Sim
        </button>

        <button
        onClick={() =>{
navigate("-1");
        }}>
            Não
            </button>
    </div>
</div>
</>
    );
};
export default ModalPage;