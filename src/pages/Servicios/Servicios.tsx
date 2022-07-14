import "./Servicios.scss";
import { CardTypes } from "../../types";
import { servicios } from "../../data/info";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Servicios() {
    return (<Container>
        {servicios.map((item, key) => {
            return (
                <Row className="servicio ml-auto mr-auto mt-5">
                    <Col className="mb-5">
                        <img
                            className="rounded img-fluid shadow"
                            src={item.img} alt={item.title}/>
                    </Col>
                    <Col className="mb-5">
                        <p className="fw-bold">{item.title} </p>
                        <p className="text-mutted mb-4">{item.text}</p>
                    </Col>
        
                </Row>
               ) 
            })
        }
    </Container>);
}

export default Servicios;
