import React from "react";
import { render } from "react-dom";

import "./App.css";
import Header from "./layout/Header";
import Lorem from "./layout/Lorem";

function App() {
  return (
    <div>
      <Header />
      <Lorem />
    </div>
  );
}

export default App;

const container = document.getElementById("app");
render(<App />, container);
