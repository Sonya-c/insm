import "./Navigation.scss";

import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

import { RouteObject } from "../../types";

interface props {
  brandName: string, 
  links: RouteObject[] 
}

function Navigation(props: props) {
  return (
    <Navbar className="nav shadow" role="navigation" bg="dark" sticky="top" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/"> 
        <Navbar.Brand>{props.brandName}</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Nav className="ml-auto"> {
              props.links.map((item, key) => {
                return (
                    <LinkContainer key={key} to={item.path}>
                      <Nav.Link className="nav-link" > 
                        {item.label}
                      </Nav.Link>
                    </LinkContainer>
                )
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
