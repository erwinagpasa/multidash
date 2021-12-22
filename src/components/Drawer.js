import { Link } from "react-router-dom";
import { Home, Layout, Users, ShoppingBag, Database } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars);

const sitename = "Multidash";

const Drawer = () => {
  return (
    <div id="sidebar">
      <div className="vh-100 d-flex flex-column flex-shrink-0 p-3 bg-light">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <h2>
            <FontAwesomeIcon icon={["fab", "bootstrap"]} />
            <span>{sitename}</span>
          </h2>
        </Link>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              <Home className="drawer-icon-menu" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/layout" className="nav-link link-dark">
              <Layout className="drawer-icon-menu" />
              Layout
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link link-dark">
              <ShoppingBag className="drawer-icon-menu" />
              Orders
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link link-dark">
              <Database className="drawer-icon-menu" />
              Data Tables
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link link-dark">
              <Users className="drawer-icon-menu" />
              Customers
            </Link>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <Link
            to="/"
            className="custom-dropdown d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://avatars.githubusercontent.com/u/637956?v=4"
              alt=""
              className="rounded-circle me-2"
              width="32"
              height="32"
            />
            Settings
          </Link>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <Link to="/" className="dropdown-item">
                New project...
              </Link>
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link to="/" className="dropdown-item">
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
