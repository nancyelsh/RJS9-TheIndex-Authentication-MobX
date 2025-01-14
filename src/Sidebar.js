import React from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react";

// Logo
import logo from "./assets/theindex.svg";
import authStore from "./stores/authStore";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        {authStore.user ? (
          <div className="fixed-bottom">
            <Logout />
          </div>
        ) : (
          <>
            <h4 className="menu-item">
              <NavLink to="/login">LOG IN</NavLink>
            </h4>
            <h4 className="menu-item">
              <NavLink to="/signup">SIGN UP</NavLink>
            </h4>
            <h4 className="menu-item">
              <NavLink to="/authors">AUTHORS</NavLink>
            </h4>
            <h4 className="menu-item">
              <NavLink to="/books">BOOKS</NavLink>
            </h4>
          </>
        )}
      </section>
    </div>
  );
};

export default observer(Sidebar);
