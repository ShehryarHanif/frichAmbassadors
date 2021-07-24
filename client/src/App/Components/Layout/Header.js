import LogoutButton from "../Buttons/LogoutButton";

import frichLogo from "../../../assets/frichLogo.png";

import classes from "./Header.module.css";

import { Navbar, Container, Nav } from "react-bootstrap";

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className={classes.header}>
      <Container>
        <Navbar.Brand className={classes.logo} href={props.imageLink}><img src={frichLogo} alt={"Frich Ambassadors"}/></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {props.links && props.links.map((specificLink, index) => (<Nav.Link key={index} href={specificLink["requiredPath"]}>{specificLink["requiredText"]}</Nav.Link>))}
          </Nav>
        </Navbar.Collapse>

        <LogoutButton />
      </Container>
    </Navbar>
  );
}

export default Header;