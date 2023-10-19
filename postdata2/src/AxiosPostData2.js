import axios from "axios";
import React, { useState }  from "react";

function AxiosPostData2(){

    const data= {
        fname:"",
        lastName:""
    }

    const [inputData, setInputdata] = useState(data)
    const handleData =(event)=>{
        setInputdata({...inputData,[event.target.name]:event.target.value})
    }

const handleSubmit = (event)=>{
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/user', inputData)
    .then((response)=>{
        console.log(response)
     .catch((err)=>{
        console.log(err)
     })   
    })
}

    return(
          
       
            
           
        < >
            
          <label>First Name</label>
          <input type="text" name="fname"  value={inputData.fname} onChange={handleData}></input><br/>
          <label>Last Name</label>
          <input type="text" name="lastName" value={inputData.lastName} onChange={handleData}></input><br/>
           

           <button onClick={handleSubmit}>submit</button>
        </>
      
    )

}

export default AxiosPostData2;