import React from "react";
import { Outlet } from "react-router-dom";
import MenuPage from "./MenuPage";
import BaseboardPage from "./BaseboardPage";

const AppPage = () =>{

    return(
        <>
<div>
<MenuPage />
<main className="container">
<Outlet></Outlet>
</main>
<BaseboardPage/>
</div>
</>
    );
};
export default AppPage;