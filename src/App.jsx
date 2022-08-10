import React from "react";
import './App.scss'
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Section from "./components/Section/Section";
import Works from "./components/Work/Works";

function App() {
  return (
    <div>
   <Header />
   <Main />
   <Section />
   <Works />
    </div>
  );
}

export default App;
