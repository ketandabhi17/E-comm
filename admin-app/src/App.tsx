import * as React from "react";
import Header from "./Components/Headers";
import Layout from "./Components/Layouts";
import { Routes, Route } from "react-router-dom";
import Home from "./Containers/Home";
import Signin from "./Containers/Signin";
import Singup from "./Containers/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Singup />} />
      </Routes>
      {/* <Header/> */}
      {/* <Layout/>
        <h1>Hello World</h1> */}
    </div>
  );
}

export default App;
