import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
       // console.log("Uppercase is clicked" +text);
        let newText = text.toUpperCase();
        SetText(newText)
    }

    const handleOnChange = (event) => {
       // console.log("on change");
        SetText(event.target.value);
    }
    const [text , SetText]=useState("enter text here ");
   // text = "new text" // Wrong way to change the state 
   //  SetText("new text"); // correct way to change state
  return (
    <div>
         <h1> {props.heading} </h1>
        <div className="mb-3">  
          <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase </button>
    </div>
  );
}
