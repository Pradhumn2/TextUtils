import React, { useState } from "react";

export default function Context(props) {

  const [text, setText] = useState("");
  
  const handleCopy = () =>{
    navigator.clipboard.writeText(text);
    console.log(text.length);
    (text.length === 0) ? props.showAlert("Enter Text First" , "warning") : props.showAlert("Text Copied" , "success");
  }

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const ToUpperCase = () =>{
    let new_val = text.toUpperCase();
    setText(new_val);
    (text.length === 0) ? props.showAlert("Enter Text First" , "warning") : props.showAlert("Text changed To UpperCase" , "success");
  }

  const ToLowerCase = () =>{
    let new_val = text.toLowerCase();
    setText(new_val);
    (text.length === 0) ? props.showAlert("Enter Text First" , "warning") : props.showAlert("Text changed To LowerCase" , "success");
  }

  const ToClearText = ()=>{
    setText("");
    (text.length === 0) ? props.showAlert("Enter Text First" , "warning") : props.showAlert("Text Cleared" , "success");
  }

  return (
    <div>
      <div className="mb-3" style={{color:props.mode === "dark" ? "white" : "black"}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.Heading}
        </label>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#948585" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-3 my-3" onClick={ToUpperCase}>ChangeToUpperCase</button>
      <button className="btn btn-primary mx-3 my-3" onClick={ToLowerCase}>ChangeToLowerCase</button>
      <button className="btn btn-primary mx-3 my-3" onClick={ToClearText}>Clear Text</button>
      <button className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
      <div className="summary"style={{color:props.mode === "dark" ? "white" : "black"}}>
        <h1>Summary</h1>
        <p>No. of words are {text.split(/\s+/).filter((element)=> {return element.length !== 0}).length} and {text.length} characters</p>
      </div>

    </div>
  );
}
