import react from "react";
import { Link } from "react-router-dom";
import "./student.css";
import useUser from "./use/useUser";

const MenuPage = () =>{
const {logoutUser} = useUser();

    return(
<>
<div className="student">
    <h5>Gerenciador Simplificado de Alunos</h5>
    <nav id="menu-page">
        <ul>
<li>
    <Link to="/logarPage">Entrar com Outra Conta</Link>
</li>

<li>
    <Link to="#" onClick={logoutUser}>Sair</Link>
</li>

<li>
    <Link to="/studentPage">Meus Alunos</Link>
</li>
        </ul>
    </nav>
</div>
</>
    );
};
export default MenuPage;