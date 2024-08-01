import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Page/About/About";
import Blog from "./Page/Blog/Blog";
import Clients from "./Page/Clients/Clients";
import Contact from "./Page/Contact/Contact";
import Home from "./Page/Home/Home";
import Jobs from "./Page/Jobs/Jobs";
import New from "./Page/News/New";
import Product from "./Page/Product/Product";
import Profile from "./Page/Profile";

function App() {
  // const product = [{ title: "suhusgv", text: "jkabcddbsd", src: require("./assets/side2.jpg") }];

  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);                                     
    setSelectedLanguage(lng);
  };

  useEffect(() => {
    // checkAuth();  
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/client"
            element={
              <Clients
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/product"
            element={
              <Product
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/job"
            element={
              <Jobs
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/blog"
            element={
              <Blog
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/news"
            element={
              <New
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                t={t}
                changeLn={changeLanguage}
                selectedLanguage={selectedLanguage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
