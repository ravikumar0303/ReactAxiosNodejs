import { useState } from 'react';
function Array(){
    const[value,setValue]=useState("");
    function handleChange(event){
        setValue(event.target.value);

    }
    return (
        <div>
            <br/><br/><br/>
        <input type="text" value={value} onChange={handleChange}></input>
        <p> You Entered:{value}</p>

        </div>
    );
}

export default Array;