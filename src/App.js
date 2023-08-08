import "./App.css";
import "./component/layout/footer.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/home";
import About from "./component/About/About";
import Nav from "./component/layout/Nav";
import React from "react";
import Footer from "./component/layout/footer";
import Consulting from "./component/Contact/Consulting";


function App() {
  return (
    <body>
      <div>
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/consulting" element={<Consulting />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </body>
  );
}

export default App;
