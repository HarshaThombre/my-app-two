import React, {useState} from 'react'



export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("convert to uppercase", "success");
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("convert to lowercase", "success");
  }
  const handleOnChange = (event)=>{
    console.log("on change");
    setText(event.target.value);
     text1=event.target.value;
    
  }
const text1="enter";
  const [text,setText] = useState('');
  // text  = 'new text' ; // wrong way to change the text 
  // setText("new text"); //correct way to change the text
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2 >{props.heading} </h2>
<div className="mb-3">
  {/* <label htmlfor="myBox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black' }} id="myBox" rows="8"></textarea>
</div>
<button className="btn-primary mx-2" onClick={handleUpClick}>  convert to upper case</button>
<button className="btn-primary mx-2" onClick={handleLoClick}>  convert to lower case</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} charachters</p>
<p>{0.008*text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}

