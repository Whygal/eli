import React from "react";
import DisplayTableDonor from "./DisplayTableDonor";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import DisplayTableGroup from "./DisplayTableGroup";
import CampaignDetails from "./CampaignDetails";
import { NavLink } from "react-router-dom";


export default function AdminPage() {
  const location = useLocation();

  return (
    <div className="rlt">
      <header>
        <div>
          <Navbar expand="lg" className="bg-body-tertiary rlt">
            <Container>
              <Navbar.Brand>
                <Link to="/admin">פרטי הקמפיין</Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="px-5">
                  <NavLink
                    to="/admin/donor"
                    className="nav-link mx-4"
                    activeClassName="active-tab"
                  >
                    תורמים
                  </NavLink>
                  <NavLink
                    to="/admin/group"
                    className="nav-link mx-4"
                    activeClassName="active-tab"
                  >
                    קבוצות
                  </NavLink>
                  <NavLink
                    to="/"
                    className="nav-link mx-4"
                    activeClassName="active-tab"
                  >
                    עבור לדף הקמפיין הראשי
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
      <main>
        {location.pathname === "/admin" && <CampaignDetails />}
        {location.pathname === "/admin/donor" && <DisplayTableDonor />}
        {location.pathname === "/admin/group" && <DisplayTableGroup />}
      </main>
    </div>
  );
}
