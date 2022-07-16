import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";    

function App() {
  const[count, setCount]= useState(0)
  const[text, setText] = useState("")

  useEffect(
    // () => { console.log("useEffect called");},[]
    () => {document.title = text;},[text]);
  useEffect(
    () => {setTimeout(() => setCount(0),5000);}, []
  );

  console.log("Component rendering");
  
  // function handleClick (){
  //   setCount((count) => count + 1)
  // }
  function handleChange(event){
    setText(event.target.value)

  }


  return (
    <div>
      {/* <button onClick={() => handleClick}> I've been clicked {count} times</button> */}
      <button onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times
      </button>
      <input type="text" value={text} onChange = {handleChange} placeholder="Type away..."/>
      <DogPics/>
    </div>
  )
  
}

export default App;
