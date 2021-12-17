import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Calendar, Home, Copy, User } from "react-feather";

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
      <div class="wrapper">
        <div id="sidebar">
          <div class="d-flex flex-column flex-shrink-0 p-3 bg-light">
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <h1>
                <FontAwesomeIcon icon={["fab", "bootstrap"]} />
                <span>Sidebar</span>
              </h1>
            </a>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                  <svg class="bi me-2" width="16" height="16">
                    <a href="#home"></a>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  <svg class="bi me-2" width="16" height="16">
                    <a href="#speedometer2"></a>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  <svg class="bi me-2" width="16" height="16">
                    <a href="#table"></a>
                  </svg>
                  Orders
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  <svg class="bi me-2" width="16" height="16">
                    <a href="#grid"></a>
                  </svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link link-dark">
                  <svg class="bi me-2" width="16" height="16">
                    <a href="#people-circle"></a>
                  </svg>
                  Customers
                </a>
              </li>
            </ul>
            <hr />
            <div class="dropdown">
              <a
                href="#"
                class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt=""
                  class="rounded-circle me-2"
                  width="32"
                  height="32"
                />
                <strong>mdo</strong>
              </a>
              <ul
                class="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser2"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="menu-shrink" class="display-none">
          <div class="d-flex flex-column flex-shrink-0 bg-light">
            <a
              href="/"
              class="d-block p-3 link-dark text-decoration-none"
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
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link active py-3 border-bottom"
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
                  class="nav-link py-3 border-bottom"
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
                  class="nav-link py-3 border-bottom"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Orders"
                >
                  <svg
                    class="bi"
                    width="24"
                    height="24"
                    role="img"
                    aria-label="Orders"
                  >
                    <a href="#table"></a>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 border-bottom"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Products"
                >
                  <svg
                    class="bi"
                    width="24"
                    height="24"
                    role="img"
                    aria-label="Products"
                  >
                    <a href="#grid"></a>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 border-bottom"
                  title=""
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-original-title="Customers"
                >
                  <User className="nav-icon" />
                </a>
              </li>
            </ul>
            <div class="dropdown border-top">
              <a
                href="#"
                class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  class="rounded-circle"
                  width="24"
                  height="24"
                />
              </a>
              <ul
                class="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser3"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <FontAwesomeIcon icon="bars" /> <span></span>
            </button>
          </nav>

          <p>
            <Calendar className="nav-icon" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1>
            Your <FontAwesomeIcon icon="coffee" /> is hot and ready! x
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="line"></div>
          <h2>Collapsible Sidebar Using Bootstrap 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="line"></div>
          <h2>Collapsible Sidebar Using Bootstrap 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div class="line"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
