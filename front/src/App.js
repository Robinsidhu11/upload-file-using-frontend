import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [currentfile,setCurrentFile]=useState('')
  async function submitHandler(event){
    event.preventDefault();
    const formData=new FormData()
    formData.append("file",currentfile)
    formData.append("fileName",currentfile.name)

    //method 1
    // await axios.post("http://localhost:4000/api/v1/uploadhere",formData).then((val)=>console.log("response is",val.data)).catch((err)=>console.log(err))
    
    //method2
    const response=await fetch("http://localhost:4000/api/v1/uploadhere",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:formData
    })
    const data=response.json()
    data.then((val)=>console.log(val.success))
  }
  function changeHandler(event){
    setCurrentFile(event.target.files[0])
    // console.log(event.target.files)
  }
  return (
    <div className="App">
    <form onSubmit={submitHandler}>
      <input onChange={changeHandler} required type='file'></input>
      <br></br>
      <button>Upload it please</button>
    </form>
      
    </div>
  );
}

export default App;
