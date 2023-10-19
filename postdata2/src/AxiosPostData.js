
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import axios from 'axios'

function AxiosPostData() {
   const[post, setPost]= useState({
    title:'',
    body:''
   })

   const handleInput = (event)=>{
     setPost({...post,[event.target.name]:event.target.value})
   }
     function handleSubmit(event){
      event.preventDefault()  //preventDefault used To not reload page click to submit button
      axios.post('https://jsonplaceholder.typicode.com/posts',{post})
      .then(response => console.log(response))
      .catch(err => console.log(err))
     }


  return (
    <div className='d-flex align-items-center justify-content vh-100 w-100'>
      <div className='w-50 text-center'>
       <form onSubmit={handleSubmit}>
        <label>
       Title:<input type='text' onChange={handleInput} name='title'/></label><br></br><br></br>
       <label>Post:<input type='text' onChange={handleInput} name='body'></input></label><br></br><br></br>
       
       <button className='btn- btn-primery'>submit</button>
      
       </form>

      </div>
     
    </div>
  );
}

export default AxiosPostData;
