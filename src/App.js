import "./App.css";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { Menu, Calendar, Home, Copy, User } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCopy,
  faUserCircle,
  faHome,
  faBars,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCopy, faUserCircle, faHome, faBars, faCoffee);

$(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#menu-shrink").toggleClass("shrink");
  });
});
function App() {
  return (
    <div className="App">
      <main>
        <div className="wrapper">
          <div id="sidebar">
            <div className="vh-100 d-flex flex-column flex-shrink-0 p-3 bg-light">
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
              >
                <h1>
                  <FontAwesomeIcon icon={["fab", "bootstrap"]} />
                  <span>Sidebar</span>
                </h1>
              </a>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active" aria-current="page">
                    <Home className="nav-icon-wide" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                    <svg className="bi me-2" width="16" height="16">
                      <a href="#speedometer2"></a>
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                    <svg className="bi me-2" width="16" height="16">
                      <a href="#table"></a>
                    </svg>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                    <svg className="bi me-2" width="16" height="16">
                      <a href="#grid"></a>
                    </svg>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link link-dark">
                    <svg className="bi me-2" width="16" height="16">
                      <a href="#people-circle"></a>
                    </svg>
                    Customers
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown">
                <a
                  href="#"
                  className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt=""
                    className="rounded-circle me-2"
                    width="32"
                    height="32"
                  />
                  <strong>mdo</strong>
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdownUser2"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="menu-shrink" className="display-none">
            <div className="vh-100 d-flex flex-column flex-shrink-0 bg-light">
              <a
                href="/"
                className="d-block p-3 link-dark text-decoration-none"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Icon-only"
              >
                <FontAwesomeIcon
                  icon={["fab", "bootstrap"]}
                  className="brand-icon"
                />
              </a>
              <ul className="d-flex nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                  <a
                    href="#"
                    className="nav-link active py-3 border-bottom"
                    aria-current="page"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Home"
                  >
                    <Home className="nav-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link py-3 border-bottom"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Dashboard"
                  >
                    <Copy className="nav-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link py-3 border-bottom"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Orders"
                  >
                    <User className="nav-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link py-3 border-bottom"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Products"
                  >
                    <User className="nav-icon" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="nav-link py-3 border-bottom"
                    title=""
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    data-bs-original-title="Customers"
                  >
                    <User className="nav-icon" />
                  </a>
                </li>
              </ul>
              <div className="dropdown border-top">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser3"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    className="rounded-circle"
                    width="24"
                    height="24"
                  />
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdownUser3"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container-fluid scrollarea">
            <div className="nav-wrap">
              <div class="d-flex bd-highlight">
                <div class="p-2 flex-grow-1 bd-highlight">
                  <div id="sidebarCollapse" className="drawer-icon">
                    <Menu className="nav-icon" />
                  </div>
                </div>

                <div className="xdropdown">
                  <a
                    href="#"
                    className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
                  >
                    <div class="icon-badge-container">
                      <User className="nav-icon" />
                    </div>
                  </a>
                </div>

                <div className="dropdown">
                  <a
                    href="#"
                    className="custom-dropdown d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div class="icon-badge-container">
                      <div class="icon-badge">6</div>
                      <User className="nav-icon" />
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser2"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <a
                    href="#"
                    className="custom-dropdown d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="https://github.com/mdo.png"
                      alt=""
                      className="rounded-circle me-2"
                      width="42"
                      height="42"
                    />
                    Erwin Agpasa
                  </a>
                  <ul
                    className="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser2"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        New project...
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container">
              <p>
                <Calendar className="nav-icon" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h1>
                Your <FontAwesomeIcon icon="coffee" /> is hot and ready! x
              </h1>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="line"></div>
              <h2>Collapsible Sidebar Using Bootstrap 5</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div class="line"></div>
              <h2>Collapsible Sidebar Using Bootstrap 5</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <div class="line"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
