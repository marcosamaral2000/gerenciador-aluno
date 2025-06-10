import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LogarPage from "./LogarPage";

const App = () =>{

    return(
        <>
                    <ToastContainer />
        <LogarPage />
        </>
    );
};
export default App;