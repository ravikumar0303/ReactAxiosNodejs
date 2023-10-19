import React from "react";

function AlertBFuncCom(){
    const handleClick =() =>{
        alert('Button Click');
    }
    return <button onClick={handleClick}>Click me</button>
}

export default AlertBFuncCom;