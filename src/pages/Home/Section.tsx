import { ReactNode } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface SectionProps {
  title: string,
  subtitle: string,
  children?: ReactNode
}

function Section(props: SectionProps) {
  return (
    <section>
      <Container className="py-5 bg-primary-gradient text-center">
       <Row>
        <Col md={8} xl={6} className="text-center mx-auto">
          <p className="fw-bold mb-2 text-primary">
            {props.title}
          </p>
          <h2>{props.subtitle}</h2>  
        </Col>
       </Row>       

       <Row>
        {props.children}
       </Row>

    </Container>
    </section>
  );
}

export default Section;
