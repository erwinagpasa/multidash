import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Drawershrink from "./components/Drawershrink";
import Home from "./containers/Home";
import Offcanvas from "./components/Offcanvas";
import Layout from "./containers/Layout";

// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faBars);

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
