import react from "react";
import { Link } from "react-router-dom";
import useUser from "./use/useUser";
import "./student.css";

const LogarPage = () =>{
const {email, setEmail, padlock, setPadlock, errorMsg, logarUser} = useUser();

    return(
<>
<div className="student" tabIndex={1}>
<h6 translate="no">Login</h6>

<div className="student-alert" tabIndex={1}>
{errorMsg?(
    <p>Mensagem de erro: {errorMsg}</p>
    ):null}
</div>

    <form onSubmit={logarUser}>
<div tabIndex={1}>
    <strong>
        Email:
    </strong>
    <input
    type="text"
    aria-label="Email"
    value={email}
    onChange={(field) =>{
        setEmail(field.target.value)
    }}
    />
</div>

<div tabIndex={1}>
    <strong>
        Senha:
    </strong>
    <input
    type="password"
    aria-label="Senha"
    value={padlock}
    onChange={(field) =>{
        setPadlock(field.target.value)
    }}
    />
</div>

<div tabIndex={1}>
    <button
    type="submit">
        Enviar
    </button>

<button 
onClick={() =>{

}}>
    Cancelar
</button>
</div>
    </form>

    <p>
        <Link to="/loginPage">Não Tem Cadastro? Click aqui...</Link>
    </p>
</div>
</>
    );
};
export default LogarPage;