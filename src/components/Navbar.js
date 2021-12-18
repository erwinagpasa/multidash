import { Search, Sidebar, Bell, Sliders, Menu } from "react-feather";

const Navbar = () => {
  return (
    <div className="nav-wrap">
      <div className="d-flex bd-highlight">
        <div className="p-2 flex-grow-1 bd-highlight">
          <div className="wrap-drawer">
            <Menu className="drawer-icon" id="sidebarCollapse" />
          </div>
        </div>

        <div className="xdropdown">
          <a
            href="#"
            className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
          >
            <div className="icon-badge-container">
              <Search className="nav-icon" />
            </div>
          </a>
        </div>

        <div className="xdropdown">
          <a
            href="#"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
          >
            <div className="icon-badge-container">
              <Sidebar className="nav-icon" />
            </div>
          </a>
        </div>

        <div className="xdropdown">
          <a
            href="#"
            className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
          >
            <div className="icon-badge-container">
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
            <div className="icon-badge-container">
              <div className="icon-badge">6</div>
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
              src="https://avatars.githubusercontent.com/u/637956?v=4"
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
  );
};

export default Navbar;
