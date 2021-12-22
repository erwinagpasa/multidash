import { Home, Layout, Users, ShoppingBag, Database } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Drawershrink = () => {
  return (
    <div id="menu-shrink" className="display-none">
      <div className="vh-100 d-flex flex-column flex-shrink-0 bg-light">
        <Link
          to="/"
          className="d-block p-3 link-dark text-decoration-none"
          title=""
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          data-bs-original-title="Icon-only"
        >
          <FontAwesomeIcon icon={["fab", "bootstrap"]} className="brand-icon" />
        </Link>
        <ul className="mt-3 d-flex nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link active py-3"
              aria-current="page"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Home"
            >
              <Home className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/layout"
              className="nav-link py-3"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Dashboard"
            >
              <Layout className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link py-3"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Orders"
            >
              <ShoppingBag className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link py-3"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Products"
            >
              <Database className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="nav-link py-3"
              title=""
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              data-bs-original-title="Customers"
            >
              <Users className="nav-icon" />
            </Link>
          </li>
        </ul>
        <div className="dropdown border-top">
          <Link
            to="/"
            className="custom-dropdown d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
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
          </Link>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser3"
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

export default Drawershrink;
