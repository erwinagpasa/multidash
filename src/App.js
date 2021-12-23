import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Drawershrink from "./components/Drawershrink";
import Home from "./containers/Home";
import Offcanvas from "./components/Offcanvas";
import Layout from "./containers/Layout";

window.onload = function () {
  const sidebarCollapse = document.getElementById("sidebarCollapse");
  const toggleClass = (el, className) => el.classList.toggle(className);
  const sidebar = document.getElementById("sidebar");
  const menuShrink = document.getElementById("menu-shrink");
  sidebarCollapse.addEventListener("click", function () {
    toggleClass(sidebar, "active");
    toggleClass(menuShrink, "shrink");
  });
};

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <div className="wrapper">
            <Drawer />
            <Drawershrink />
            <div className="container-fluid scrollarea">
              <Navbar />
              <div id="main-container" className="container-fluid">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/layout" element={<Layout />}></Route>
                </Routes>
              </div>
            </div>
          </div>
          {/* RIGHT SLIDER */}
          <Offcanvas />
        </main>
      </Router>
    </div>
  );
}

export default App;
