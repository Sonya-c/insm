import "./Home.scss";

import { about, servicios, productos, social_media } from "../../data/info";

import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Header from "../../componets/Header/Header";
import Section from "./Section";

function Home() {
    return (<>
      <Section
            id="about"
            title="Acerca de Nosotros"
            subtitle="Más de 20 años de experiencia" >
        <p>{ about }</p>
      </Section >

      <Section
            id="servicios"
            className="bs-gray"
            title="Servicios"
            subtitle="Que podemos hacer por ti" >

        <Row className="row-cols-1
                        row-cols-md-2
                        mt-3
                        d-flex
                        justify-content-center">
            {servicios.map((item, key) => {
                return (
                <Col key={key} className="mb-4">
                    <Card className="">
                    <Card.Body className="shadow-sm text-center px-4 py-5 px-md-5">
                        <Card.Title className="mb-2">
                            {item.title} 
                        </Card.Title> 
                    </Card.Body>
                    </Card>
                </Col>
              )}
            )}
        </Row>

        <Row>
            <Col> 
            <Link className="btn btn-primary" to="servicios">
                Conocer más
            </Link>
            </Col>
        </Row>
      </Section>

      <Section id="productos" title="Productos" subtitle="Que te ofrecemos" >
        
        <Row className="row-cols-1 row-cols-md-3">
            {productos.map((item, key) => {
                return (
                    <Col className="mb-4">
                        <Card className="bg-light-blue">
                            <Card.Body className="text-center px-4 py-5 px-md-5">
                                <Card.Title>{item.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                )
              })
            }
        </Row>
        <Row>
            <Col>
            <Link className="mt-3 btn btn-primary" to="productos">
                Conocer más
            </Link>
            </Col>
        </Row>
      </Section>

      <Section id="contacto" title="Contacto" subtitle="Como puedes entrarnos" >
        <Row className="mt-3 d-flex flex-wrap">
        {social_media.map((item, key) => {
                    return (
                        <Col className="mb-4">
                            <Card>
                                <Card.Body className="shadow px-4 py-5 px-md-5">
                                    <Card.Title className="mb-2">
                                        {item.title}
                                    </Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            )}
        </Row>
      </Section>
    </>
    );
}

export default Home;
