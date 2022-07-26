import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("upper case was clickeds"+text);
    let newText=text.toUpperCase();
    setText(newText);

  }
  const handleOnChange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
  }
  const clearText =(event)=>{
    console.log('');
    setText(event.target.value);
  }
  const[text,setText]=useState('');
   return (
    <>
      <div>
          <h1>Enter your text:</h1>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control"  value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to lower case</button>
          <button className="btn btn-primary" onClick={handleUpClick}>convert to upper case</button>
          <button className="btn btn-primary mx-3" onClick={clearText}>clear text</button>
         
      </div>
      <div className="container my-2">
          <h1>your text summary</h1>
          <p>{text.split(" ").length} words and {text.length} character</p>
          <p>{0.008 *text.split(" ").length }</p>
          <h2>preview</h2>
          <p>{text}</p>
      </div>
    </>
  )
}
