import React, { useState } from 'react'

function TextForm(props) {
  const [text, setText] = useState('')
  //   const [mode, setMode] = useState("dark");
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: 'white',
  //   color: 'black',
  // })

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const toUpperCase = () => {
    setText(text.toUpperCase())
    props.showAlert("Text Converted to Uppercase", "success")
  }

  const toLowerCase = () => {
    setText(text.toLowerCase())
    props.showAlert("Text Converted to Lowercase", "success")
  }

  const clearText = () => {
    setText('')
    props.showAlert("Text Cleared", "success")
  }

  // Copy Text to Clipboard
  const copyText = () => {
    let text = document.getElementById('myBox')
    // text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied to Clipboard", "success")
  }

  // To Remove Extra Spaces between the texts
  const removeSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert("Extra Spaces removed", "success")
  }

  // This function make infinite loop of rendering
  // const changeMode = () => {
  //   if (props.mode === 'light') {
  //     //   setMode("dark");
  //     setMyStyle({
  //       backgroundColor: 'white',
  //       color: 'black',
  //     })
  //   } else {
  //     //   setMode("light");
  //     setMyStyle({
  //       backgroundColor: 'black',
  //       color: 'white',
  //     })
  //   }
  // }
  //   changeMode();

  return (
    <>
      {/* <h1>{props.heading}</h1> */}
      <div
        className="my-3"
        style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black' }}
      >
        <textarea
          id="myBox"
          className="form-control "
          style={{
            backgroundColor: props.mode === 'light' ? 'white' : 'black',
            color: props.mode === 'light' ? 'black' : 'white',
          }}
          placeholder="Enter Your Text To Analyze"
          value={text}
          onChange={handleChange}
          rows="8"
        ></textarea>
      </div>
      <button
        className="btn btn-primary m-3"
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : 'black',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
        onClick={toUpperCase}
        disabled={text.length===0}
      >
        Convert to UpperCase
      </button>

      <button
        className="btn btn-primary m-3"
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : 'black',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
        onClick={toLowerCase}
        disabled={text.length===0}
      >
        Convert to LowerCase
      </button>

      <button
        className="btn btn-primary m-3"
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : 'black',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
        onClick={clearText}
        disabled={text.length===0}
      >
        Clear Text
      </button>

      <button
        className="btn btn-primary m-3"
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : 'black',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
        onClick={copyText}
        disabled={text.length===0}
      >
        Copy Text
      </button>

      <button
        className="btn btn-primary m-3"
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : 'black',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
        onClick={removeSpace}
        disabled={text.length===0}
      >
        Remove Extra Space
      </button>

      {/* <button
        className="btn btn-primary mx-3"
        style={myStyle}
        onClick={changeMode}
      >
        Enable {mode} mode
      </button> */}

      <div
        className="container m-3"
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : 'black',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s/).filter((element) => element.length!==0).length} words and {text.length} characters
        </p>
        <p>{text.split(' ').filter((element) => element.length!==0).length * 0.008} minutes read</p>
        <hr />
        <h3>Preview</h3>
        <p>{text.length===0?"Nothing to Preview": text}</p>
      </div>
    </>
  )
}

export default TextForm
