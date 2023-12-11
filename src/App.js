import React, { useState } from "react";
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const closeNav = () => {
    setActive("navBar");
  };
  return (
    <>
      <Navbar active={active} setActive={setActive} showNav={showNav} closeNav={closeNav}/>
      <Home active={active} />
      <Main />
      <Footer />
    </>
  )
}

export default App;
