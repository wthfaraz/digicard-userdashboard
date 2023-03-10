import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <a href="#" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Starter Pages
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Active Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inactive Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* <a href="#" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
            fdsaf  
            </p>
          </a> */}

                <Link
                  to="/"
                  className="nav-item"
                  style={{ textDecoration: "none" }}
                >
                  <a className="nav-link">
                    <i className="fa-solid fa-marker" />
                    &nbsp;&nbsp;&nbsp;
                    <span className="menu-title">Account Update</span>
                  </a>
                </Link>
                <Link
                  to="/SeeNews"
                  className="nav-item"
                  style={{ textDecoration: "none" }}
                >
                  <a className="nav-link">
                    <i className="fa-solid fa-newspaper" />
                    &nbsp;&nbsp;&nbsp;{" "}
                    <span className="menu-title">See News</span>
                  </a>
                </Link>

                <Link
                  to="/AddPortfolio"
                  className="nav-item"
                  style={{ textDecoration: "none" }}
                >
                  <a className="nav-link">
                    <i className="fa-solid fa-image" />
                    &nbsp;&nbsp;&nbsp;{" "}
                    <span className="menu-title">Portfolio Images</span>
                  </a>
                </Link>
                <Link
                  to="/YourWebsite"
                  className="nav-item"
                  style={{ textDecoration: "none" }}
                >
                  <a className="nav-link">
                    <i className="fa-brands fa-edge" />
                    &nbsp;&nbsp;&nbsp;{" "}
                    <span className="menu-title">Your Website</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
