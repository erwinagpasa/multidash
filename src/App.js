import "./App.css";

import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Drawershrink from "./components/Drawershrink";
import Home from "./containers/Home";
import Offcanvas from "./components/Offcanvas";

// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

// library.add(fab, faBars);

function App() {
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <Drawer />
          <Drawershrink />
          <div className="container-fluid scrollarea">
            <Navbar />
            <div id="main-container" className="container-fluid">
              <Home />
            </div>
          </div>
        </div>
        {/* RIGHT SLIDER */}
        <Offcanvas />
      </main>
    </div>
  );
}

export default App;
