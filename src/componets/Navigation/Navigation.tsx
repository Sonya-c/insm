import "./Navigation.scss";

import { Navbar, Container, Nav } from 'react-bootstrap'

interface props {
  brandName: string, 
  links: { link: string, label: string }[] 
}

function Navigation(props: props) {
  return (
    <Navbar className="nav" role="navigation" bg="dark" sticky="top" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>{props.brandName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Nav className="ml-auto"> {
              props.links.map((item, key) => {
                return <Nav.Link className="nav-link" key={key} href={item.link} >
                  {item.label}
                </Nav.Link>
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;