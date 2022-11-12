import "./App.css";
import Navbar from "./Components/Navbar";
import Context from "./Components/Context";
import About from "./Components/About";
import Alert from "./Components/Alert";
import React, { useState } from "react"; //imrs shortcut

import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1200);
  };

  const changemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Enabled", "success");
    }
  };

  return (
    <>
        <Navbar name="TextUtils" mode={mode} changemode={changemode}></Navbar>
        <Alert alert={alert} />
        <div className="container">
        <Routes>
          <Route path="/about" element={<About mode = {mode}/>}/>
          <Route path="/" element={<Context
                showAlert={showAlert}
                Heading="Enter Your Text Here"
                mode={mode}
                alert={alert}
          />} 
          />
        </Routes>
        </div>
    </>
  );
}

export default App;
