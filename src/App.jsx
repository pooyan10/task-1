import { useState } from "react";
import Home from "../components/Home";
import LoginPage from "../components/LoginPage";

import "./App.css";

function App() {
  return (
    <>
      <div className="">
        <Home />
      </div>

      <LoginPage />
    </>
  );
}

export default App;
