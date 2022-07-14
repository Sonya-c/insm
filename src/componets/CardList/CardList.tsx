import { CardTypes } from "../../types";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CardList(props: {list: CardTypes[]}) {
    return (<Container> {
        props.list.map((item, key) => {
                return (
                    <Row className="ml-auto mr-auto mt-5">
                        <Col className="mb-5">
                            <img
                                className="rounded img-fluid shadow"
                                src={item.img}
                                alt={item.title}
                            />
                        </Col>
                        <Col className="mb-5">
                            <p className="fw-bold">{ item.title }</p>
                            <p className="text-mutted mb-4">{ item.text }</p>
                        </Col>
                    </Row>
                )
            }
        )}
    </Container>);
}

export default CardList;
