import { useState } from 'react';
import { toast } from 'react-toastify';
import useStudent from './useStudent';

const useOtherFunction = () =>{
const {detailStudent, deleteStudent , listStudents} = useStudent();
const [showButtons, setShowButtons] = useState({}); 
  const [showModal, setShowModal] = useState(null); 

const exibir = (message, type = 'info', duration = 3000) => {
    const options = {
      autoClose: duration,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
    };
    switch (type) {
      case 'success':
        toast.success(message, options);
        break;
      case 'error':
        toast.error(message, options);
        break;
      case 'warning':
        toast.warn(message, options);
        break;
      default: // 'info'
        toast.info(message, options);
    }
  };

  const alternateButtons = (id) => {
    setShowButtons((prevButtons) => ({
      ...prevButtons,
      [id]: !prevButtons[id], 
    }));
  };

  const renderButtons = (student) => {
    return (
      <div className="box">
        <button
          aria-label="detalhes"
          onClick={() => detailStudent(student.id)}
        >
          Detalhes
        </button>
        <button
          aria-label="excluir"
          onClick={() => {
            setShowModal(student.id)
setShowButtons(false)
          }}
        >
          Excluir
        </button>
      </div>
    );
  };

  const confirmDelete = (id) => {
    const studentToDelete = listStudents.find((student) => student.id === id);
    return (
      <>
        <p>Deseja realmente excluir os dados de ({studentToDelete?.name})?</p>
        <button
          onClick={() => {
            deleteStudent(id);
            setShowModal(null); 
          }}
        >
          Confirmar
        </button>
        <button onClick={() => setShowModal(null)}>Cancelar</button>
      </>
    );
  };

  return{
    exibir,
    setShowButtons,
    showButtons,
    showModal,
    setShowModal,
confirmDelete,
renderButtons,
alternateButtons,
  }
}
export default useOtherFunction;