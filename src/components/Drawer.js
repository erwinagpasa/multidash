import { Home, Layout, Users, ShoppingBag, Database } from "react-feather";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars);

const sitename = "Multidash";
let foo = "https://devph.io";

const Drawer = () => {
  return (
    <div id="sidebar">
      <div className="vh-100 d-flex flex-column flex-shrink-0 p-3 bg-light">
        <a
          href="javascript:void(0)"
          onClick={foo}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <h2>
            <FontAwesomeIcon icon={["fab", "bootstrap"]} />
            <span>{sitename}</span>
          </h2>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              href="javascript:void(0)"
              onClick={foo}
              className="nav-link active"
              aria-current="page"
            >
              <Home className="drawer-icon-menu" />
              Home
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={foo}
              className="nav-link link-dark"
            >
              <Layout className="drawer-icon-menu" />
              Layout
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={foo}
              className="nav-link link-dark"
            >
              <ShoppingBag className="drawer-icon-menu" />
              Orders
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={foo}
              className="nav-link link-dark"
            >
              <Database className="drawer-icon-menu" />
              Data Tables
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              onClick={foo}
              className="nav-link link-dark"
            >
              <Users className="drawer-icon-menu" />
              Customers
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="javascript:void(0)"
            onClick={foo}
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
          </a>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <a
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                New project...
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
