import * as React from "react";
import { Routes, Route } from "react-router-dom";
// import KNavbar from "./components/Navbar";
// import Index from "./components/layouts";
import Home from "./container/Home/home";
import Signin from "./container/Signin/signin";
import Signup from "./container/Signup/signup";

function App() {
  return (
    <div className="App">
      {/* <Index/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
