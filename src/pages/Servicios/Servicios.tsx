import "./Servicios.scss";

import { ServicioProps } from "../../types";
import { services } from "../../data/info";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Servicio(props: ServicioProps) {
    return (
        <Row className="servicio ml-auto mr-auto mt-5">
            <Col className="mb-5">
                <img className="rounded img-fluid shadow" src={props.img} alt={props.title}/>
            </Col>
        <Col className="mb-5">
            <p className="fw-bold">{props.title} </p>
            <p className="text-mutted mb-4">{props.text}</p>
        </Col>

        </Row>
    );    
}

/* todo
 * contenido de los servicios
 */

function Servicios() {
    return (<Container>
        {services.map((item, key) => {
            return <Servicio
                        title={item.title}
                        text={item.text}
                        img={item.img}
                    /> 
            })
        }
    </Container>);
}

export default Servicios;
