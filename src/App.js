import { useState } from 'react'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const removeClasses = () => {
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  }

  // const changeMode = (cls) => {
  //   removeClasses();
  //   document.body.classList.add('bg-'+cls);
  //   if (mode === 'light') {
  //     setMode('dark')
  //     document.body.style.backgroundColor = 'black'
  //     showAlert('Dark Mode Enabled', 'success')
  //   } else {
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert('Dark Mode Disabled', 'success')
  //   }
  // }

  const changeMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert('Dark Mode Enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Dark Mode Disabled', 'success')
    }
  }

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Navbar/> */}
        {/* <Navbar title="Text Utils" aboutText="About TextUtils"/> */}
        <Navbar title="Text Utils" mode={mode} changeMode={changeMode} />
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes> */}
            {/* <Route path="/" element={<TextForm heading="Welcome to Text Analyzer" mode={mode} showAlert={showAlert} />} /> */}
            <TextForm heading="Welcome to Text Analyzer" mode={mode} showAlert={showAlert} />
            {/* <Route path="/about" element={<About />} /> */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  )
  }

export default App
