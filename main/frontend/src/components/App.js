import React from "react";
import { render } from "react-dom";

import "./App.css";
import Header from "./layout/Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
