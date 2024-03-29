import React from 'react'
import logo from "../assets/logo.jpg"; // Initialization for ES Users
import { Dropdown, Ripple, initMDB } from "mdb-ui-kit";
import Navbar from "../components/Navbar";
initMDB({ Dropdown, Ripple });

const Authors = () => {
  return (
    <div>
      <header>
        <Navbar />
        {/* <!-- Sidebar -->

            <!-- Navbar --> */}
        <nav
          id="main-navbar"
          class="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          {/* <!-- Container wrapper --> */}
          <div class="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-collapse-init
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            {/* <!-- Brand --> */}
            <a class="navbar-brand" href="#">
              <img src={logo} height="30" alt="" loading="lazy" />
            </a>
            {/* <!-- Search form --> */}
            <form class="d-none d-md-flex input-group w-auto my-auto">
              <input
                autocomplete="off"
                type="search"
                class="form-control rounded"
                placeholder="Search"
                style={{ minWidth: "225px" }}
              />
              <span class="input-group-text border-0">
                <i class="fas fa-search"></i>
              </span>
            </form>

            {/* <!-- Right links --> */}
            <ul class="navbar-nav ms-auto d-flex flex-row">
              {/* <!-- Notification dropdown --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-dropdown-init
                  aria-expanded="false"
                >
                  <i class="fas fa-bell"></i>
                  <span class="badge rounded-pill badge-notification bg-danger">
                    1
                  </span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      Some news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another news
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Icon --> */}
              <li class="nav-item">
                <a class="nav-link me-3 me-lg-0" href="#">
                  <i class="fas fa-fill-drip"></i>
                </a>
              </li>
              {/* <!-- Icon --> */}
              <li class="nav-item me-3 me-lg-0">
                <a class="nav-link" href="#">
                  <i class="fab fa-github"></i>
                </a>
              </li>

              {/* <!-- Icon dropdown --> */}
              <li class="nav-item dropdown">
                <a
                  class="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-dropdown-init
                  aria-expanded="false"
                >
                  <i class="united kingdom flag m-0"></i>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="united kingdom flag"></i>English
                      <i class="fa fa-check text-success ms-2"></i>
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="poland flag"></i>Polski
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="china flag"></i>中文
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="japan flag"></i>日本語
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="germany flag"></i>Deutsch
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="france flag"></i>Français
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="spain flag"></i>Español
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="russia flag"></i>Русский
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="portugal flag"></i>Português
                    </a>
                  </li>
                </ul>
              </li>

              {/* <!-- Avatar --> */}
              <li class="nav-item dropdown">
                <a
                  a
                  class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-dropdown-init
                  data-mdb-ripple-init
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    class="rounded-circle"
                    height="22"
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </header>
      <main style={{ marginTop: "58px" }}>
        <div class="container pt-4">
          <div class="row">
            <div class="col-xl-3 col-sm-6 col-12 mb-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 class="text-info">278</h3>
                      <p class="text-info">Average Rating</p>
                      <h5 class="mb-0">New Posts</h5>
                    </div>
                    <div class="align-self-center">
                      <i class="fas fa-rocket text-info fa-3x"></i>
                    </div>
                  </div>
                  <div class="px-md-1">
                    <div
                      class="progress mt-3 mb-1 rounded"
                      style={{ height: "7px" }}
                    >
                      <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 class="text-warning">156</h3>
                        <p class="mb-0">New Comments</p>
                      </div>
                      <div class="align-self-center">
                        <i class="far fa-comments text-warning fa-3x"></i>
                      </div>
                    </div>
                    <div class="px-md-1">
                      <div
                        class="progress mt-3 mb-1 rounded"
                        style={{ height: "7px" }}
                      >
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "35%" }}
                          aria-valuenow="35"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 class="text-success">64.89 %</h3>
                        <p class="mb-0">Bounce Rate</p>
                      </div>
                      <div class="align-self-center">
                        <i class="fas fa-mug-hot text-success fa-3x"></i>
                      </div>
                    </div>
                    <div class="px-md-1">
                      <div
                        class="progress mt-3 mb-1 rounded"
                        style={{ height: "7px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-12 mb-4">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex justify-content-between px-md-1">
                      <div>
                        <h3 class="text-danger">423</h3>
                        <p class="mb-0">Total Visits</p>
                      </div>
                      <div class="align-self-center">
                        <i class="fas fa-map-signs text-danger fa-3x"></i>
                      </div>
                    </div>
                    <div class="px-md-1">
                      <div
                        class="progress mt-3 mb-1 rounded"
                        style={{ height: "7px" }}
                      >
                        <div
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Authors
