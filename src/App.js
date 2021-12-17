import "./App.css";
import $ from "jquery";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { Sidebar, Bell, Sliders, Menu, Home, Copy, User } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars);

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
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                    className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
                  >
                    <div class="icon-badge-container">
                      <Sidebar className="nav-icon" />
                    </div>
                  </a>
                </div>

                <div className="xdropdown">
                  <a
                    href="#"
                    className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
                  >
                    <div class="icon-badge-container">
                      <Sliders className="nav-icon" />
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
                      <Bell className="nav-icon" />
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
                    <span className="username">Erwin Agpasa</span>
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

            <div id="main-container" className="container">
              <h2>
                Powerful and professional admin template for Web Applications,
                CRM, CMS, Admin Panels and more..
              </h2>

              <h5 className="mt-5">
                Multidash Reactjs is a great kick-starter
              </h5>
              <p>
                Multidash Reactjs written with the React Hooks (New feature of
                react let you use state and other React features without writing
                a class. With the included apps and pages, Multidash Reactjs is
                a great kick-starter for your next project. Don’t lose any time
                trying to design or structure your pages, pick one and start
                coding your logic right away!
              </p>

              <h5 className="mt-5">Fuse is a learning source</h5>
              <p>
                With well commented and structured source code, whether a
                beginner or a seasoned React developer, you will find something
                interesting in Multidash Reactjs.
              </p>

              <h5 className="mt-5">Customizable Theme Layouts</h5>
              <p>
                Multidash Reactjs has a powerful layout system which allows you
                to configure, customize and also create you own layout.
              </p>

              <h5 className="mt-5">Ready-to-use Page Layouts</h5>
              <p>
                Multidash Reactjs's page layout components are pre-built layouts
                which you can simply copy/paste and start building your own page
                or app based on it. It's very easy to replicate any page style
                that you can find in Multidash Reactjs. It also makes your pages
                consistent across your app.
              </p>

              <h5 className="mt-5">
                Ever growing number of application examples
              </h5>
              <p>
                Multidash Reactjs comes with variety of different application
                examples that are built close to the real world examples. From
                Scrumboard to Mailbox, Contacts to ToDo app, you will get
                working applications to speed up the development.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">...</div>
        </div>
      </main>
    </div>
  );
}

export default App;
