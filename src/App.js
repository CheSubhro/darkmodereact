import React, { useState, useEffect } from "react";
import Home from "../src/Components/Pages/Home/Home";
import Header from "./Reusables/Header/Header";
import Footer from "./Reusables/Footer/Footer"
import { ThemeContext, themes } from "../src/context/themeContext";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
	
  const [theme, setTheme] = useState(themes.light);

  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  const body = document.body;

  useEffect(() => {

    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
    }
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{ theme, handleOnClick }}>
        <Router>
          <Header  theme={theme} />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;