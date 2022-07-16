
import { CardTypes } from "../../types";

import { Row, Col, Card } from "react-bootstrap";

function CardGallery(props: {row?: number, row_md?: number, cardList: CardTypes[], bg?: string}) {


    return (
    <Row className={ "card-gallery dd-flex flex-wrap justify-content-center mt-3 row-cols-" + props.row + " row-cols-md-" + props.row_md} > {
            props.cardList.map((item, key) => { return (
                <Col className="mb-4">
                    <Card className={props.bg}>
                        <Card.Body className="shadow-sm text-center px-4 py-5 px-md-5">
                            <Card.Title className="mb-2" > { item.title } </Card.Title>
                            <Card.Text> { item.text } </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )}
        )}
    </Row> );
}

export default CardGallery;
