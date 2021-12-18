import { Search, Sidebar, Bell, Sliders, Menu } from "react-feather";

let foo = "https://devph.io";

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
          <Link
            href="javascript:void(0)"
            onClick={foo}
            className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
          >
            <div className="icon-badge-container">
              <Search className="nav-icon" />
            </div>
          </Link>
        </div>

        <div className="xdropdown">
          <Link
            href="javascript:void(0)"
            onClick={foo}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
          >
            <div className="icon-badge-container">
              <Sidebar className="nav-icon" />
            </div>
          </Link>
        </div>

        <div className="xdropdown">
          <Link
            href="javascript:void(0)"
            onClick={foo}
            className="custom-dropdown d-flex align-items-center link-dark text-decoration-none"
          >
            <div className="icon-badge-container">
              <Sliders className="nav-icon" />
            </div>
          </Link>
        </div>

        <div className="dropdown">
          <Link
            href="javascript:void(0)"
            onClick={foo}
            className="custom-dropdown d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="icon-badge-container">
              <div className="icon-badge">6</div>
              <Bell className="nav-icon" />
            </div>
          </Link>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <Link
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                New project...
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropdown">
          <Link
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
              width="42"
              height="42"
            />
            <span className="username">Erwin Agpasa</span>
          </Link>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser2"
          >
            <li>
              <Link
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                New project...
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                className="dropdown-item"
                href="javascript:void(0)"
                onClick={foo}
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
