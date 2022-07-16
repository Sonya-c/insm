
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SectionProps } from  "../../types";

function Section(props: SectionProps) {
  return (
    <section className={props.className} id={props.id}>
      <Container className="py-5 bg-primary-gradient text-center">
       <Row className="row-cols-1">
        <Col md={8} xl={6} className="text-center mx-auto">
          <p className="fw-bold mb-2 text-primary">
            {props.title}
          </p>
          <h2>{props.subtitle}</h2>  
        </Col>
        
       <Col>
            {props.children}
        </Col>
       </Row>       
    </Container>
    </section>
  );
}

export default Section;
