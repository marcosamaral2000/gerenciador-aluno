import react from "react";
import useUser from "./use/useUser";
import "./student.css";

const LoginPage = () =>{
const {email, setEmail, padlock, setPadlock, errorMsg, registerUser} = useUser();

    return(
<>
<div className="student" tabIndex={1}>
    <h6 translate="no">Login</h6>

    <div className="student-alert" tabIndex={1}>
{errorMsg?(
    <p>Mensagem de erro: {errorMsg}</p>
):null}
    </div>

<form onSubmit={registerUser}>
<div tabIndex={1}>
    <strong>
        Email:
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
    Senha; é necessário que seja uma senha forte:
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
</div>
</>
    );
};
export default LoginPage;