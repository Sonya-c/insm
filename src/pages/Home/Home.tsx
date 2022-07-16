import "./Home.scss";

import { about, servicios, productos, social_media } from "../../data/info";

import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Header from "../../componets/Header/Header";
import Section from "../../componets/Section/Section";
import CardGallery from "../../componets/CardGallery/CardGallery";

function MoreButton(props: { to: string }) {
    return (
        <Row>
            <Col> 
                <Link className="btn btn-primary" to={ props.to }>
                    Conocer más
                </Link>
            </Col>
        </Row>
    );
}

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

            <CardGallery cardList={servicios} row={1} row_md={2}/>
            <MoreButton to="servicios" />
      </Section>

      <Section
            id="productos"
            title="Productos"
            subtitle="Que te ofrecemos" >

        <CardGallery cardList={productos} row={1} row_md={3} bg="bg-light-blue"/>
        <MoreButton to="productos" />
      </Section> 
    </> );
}

export default Home;
