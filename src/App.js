import React, { createContext, useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
export const PopContext = createContext(null)
function App() {

  const [loginVisible, setLoginVisible] = useState(false)
  const [regVisible, setRegVisible] = useState(false)
  const [forgotVisible, setForgotVisible] = useState(false)
  const body = document.querySelector('body');

  useEffect(() => {
    if (loginVisible || regVisible || forgotVisible) body.style.overflow = 'hidden';
    else body.style.overflow = 'visible'
  }, [loginVisible, regVisible, forgotVisible])


  return (
    <PopContext.Provider value={{
      loginVisible,
      setLoginVisible,
      regVisible,
      setRegVisible,
      forgotVisible,
      setForgotVisible
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </PopContext.Provider>

  );
}

export default App;
