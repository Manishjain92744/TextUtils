import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("Uppercase is clicked" +text);
        let newText = text.toUpperCase();
        SetText(newText)
    }
   const  handleLoClick =() => {
          let newtext = text.toLowerCase();
          SetText(newtext);
    }
  const handleClearClick = () =>{
    let newText = '';
    SetText(newText);
  }



    const handleOnChange = (event) => {
       // console.log("on change");
        SetText(event.target.value);
    }
    const [text , SetText]=useState("enter text here ");
   // text = "new text" // Wrong way to change the state 
   //  SetText("new text"); // correct way to change state
  return (
    <> 
    <div className="container">
         <h1> {props.heading} </h1>
        <div className="mb-3">  
          <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase </button>
        <button className="btn btn-primary mx-1 " onClick={handleLoClick}>Convert to lowerCase </button>
        <button className="btn btn-primary mx-1 " onClick={handleClearClick}>Clear text</button>


    </div>
    <div className="container my-3">
      <h2> your text summary </h2>
      <p> {text.split(" ").length}  words and {text.length} characters </p>
      <p> {0.008*text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p> {text}</p>
    </div>
    </>
  );
}
