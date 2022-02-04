import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  Dropdown,
} from "../styles/Navbar.style";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };
  return (
    
    <NavbarContainer className="navbg fixed-top" extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink className="Navbarlink" to="/home">
              {" "}
              Home
            </NavbarLink>
            <NavbarLink className="Navbarlink" to="/Members">
              {" "}
              Members
            </NavbarLink>
            <NavbarLink className="Navbarlink" to="/SignIn">
              {" "}
              Sign In
            </NavbarLink>
            <NavbarLink className="Navbarlink" to="/AddMember">
              {" "}
              Add Member
            </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavbarLinkContainer>
            <div className="container-fluid d-flex justify-content-start align-items-start">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarDarkDropdownMenuLink"
                aria-controls="navbarNavDarkDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon mt-2 pr-5 textcolnav d-flex justify-content-start align-items-start">{user?.email}</span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarDarkDropdownMenuLink"
              >
                    <a
                      className="nav-link dropdown-toggle dropdown-menu-dark"
                      href="/SignIn"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      onClick={logout}
                    >
                      Logout
                    </a>
              </div>
            </div>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended className="Navbarlink" to="/home">
            {" "}
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended className="Navbarlink" to="/Members">
            {" "}
            Members
          </NavbarLinkExtended>
          <NavbarLinkExtended className="Navbarlink" to="/SignIn">
            {" "}
            Sign In
          </NavbarLinkExtended>
          <NavbarLinkExtended className="Navbarlink" to="/AddMember">
            {" "}
            Add Member
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
export default Navbar;
