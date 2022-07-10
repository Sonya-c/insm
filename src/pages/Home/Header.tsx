
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <header className="bg-primary-gradient pt-5">
      <Container className="pt-4 pt-xl-5">
        <Row pt={5}>
          <Col md={8} xl={6} className="text-center text-md-start mx-auto">
            <div className="text-center">
              <p className="fw-bold mb-2 text-primary">INSM</p>
              <h1 className="fw-bold">Ingeniería Naval y Señalización Maritima</h1>
            </div>
          </Col>      
          
          <Col lg={10} className="mx-auto">
          </Col>
        
        </Row>
      </Container>
    </header>
  );
}

export default Header;
