import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("Uppercase is clicked" +text);
        let newText = text.toUpperCase();
        SetText(newText)
        props.showAlert("converted to upper case","sucess");
    }
   const  handleLoClick =() => {
          let newtext = text.toLowerCase();
          SetText(newtext);
          props.showAlert("converted to lower case","sucess");
    }
  const handleClearClick = () =>{
    let newText = '';
    SetText(newText);
    props.showAlert("cleared text","sucess");
  }
  const handleCopy =()=> {
    let text = document.getElementById("my-box");
    text.select();
    navigator.clipboard.writeText(text.value);
    console.log("copied sucessfully ");
    props.showAlert("text copied ","sucess");
  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    SetText(newText.join(" "));
    props.showAlert("removed extra spaces","sucess");
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
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} >
         <h1> {props.heading} </h1>
        <div className="mb-3">  
          <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey'}}onChange={handleOnChange} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase </button>
        <button className="btn btn-primary mx-1 " onClick={handleLoClick}>Convert to lowerCase </button>
        <button className="btn btn-primary mx-1 " onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-primary mx-1 "  onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces}>Remove extra space</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2> your text summary </h2>
      <p> {text.split(" ").length}  words and {text.length} characters </p>
      <p> {0.008*text.split(" ").length} Minutes to read </p>
      <h2>Preview</h2>
      <p> {text.length>0?text:"Enter something in the textbox above to priview here"}</p>
    </div>
    </>
  );
}
