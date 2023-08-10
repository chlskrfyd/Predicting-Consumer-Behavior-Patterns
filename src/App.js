import "./App.css";
import "./component/layout/footer.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home/home";
import About from "./component/About/About";
import Nav from "./component/layout/Nav";
import React from "react";
import Footer from "./component/layout/footer";
import Customer from "./component/Contact/Customer";
import Category from "./component/Contact/Category";
import Segmentation from "./component/Contact/Segmentation";
import Business from "./component/Contact/Business";

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
              <Route path="/customer" element={<Customer />} />
              <Route path="/category" element={<Category />} />
              <Route path="/segmentation" element={<Segmentation />} />
              <Route path="/business" element={<Business />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </body>
  );
}

export default App;
