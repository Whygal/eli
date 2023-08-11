import React from "react";
import DisplayTable from "./DisplayTable";
import AddDonor from "./AddDonor";
import { Navbar, Container, Nav } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import DisplayTableGroup from "./DisplayTableGroup";
import CampaignDetails from "./CampaignDetails";

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
                  <Link to="/admin/donor" className="nav-link">
                    תורמים
                  </Link>
                  <Link to="/admin/group" className="nav-link">
                    קבוצות
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
      <main>
        {location.pathname === "/admin" && <CampaignDetails />}
        {location.pathname === "/admin/donor" && <DisplayTable />}
        {location.pathname === "/admin/group" && <DisplayTableGroup />}
        {location.pathname === "/admin/donor/new" && <AddDonor />}
      </main>
    </div>
  );
}
