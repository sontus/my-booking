import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
const Hotel = () => {
    return (
        <div>
            <Container>
            <h3>Hotel</h3>
                <Row>
                    <Col xs={6} md={3} sm={3} className="hotel">
                        <Card>
                        <Card.Img variant="top" src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcH89uesyHBypMe82FtXM42GkSOnO4AMFpFcwH8L+Yh73NAXTEe5torFwQNoFM4G6QQ==" />
                        <Card.Body>
                            <Card.Title>Hotel The Cox Today</Card.Title>
                            <Card.Text>
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                             Plot-7, Road-02 Hotel Motel Zone, Kolatoly Road Cox's Bazar
                            </Card.Text>
                            <Button variant="primary">Book Now</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3} sm={3}>
                        <Card>
                        <Card.Img variant="top" src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcH89uesyHBypMe82FtXM42GkSOnO4AMFpFcwH8L+Yh73NAXTEe5torFwQNoFM4G6QQ==" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3} sm={3}>
                        <Card>
                         <Card.Img variant="top" src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcH89uesyHBypMe82FtXM42GkSOnO4AMFpFcwH8L+Yh73NAXTEe5torFwQNoFM4G6QQ==" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} md={3} sm={3}>
                        <Card>
                         <Card.Img variant="top" src="https://api.sharetrip.net/api/v1/hotel/image?key=HyANbffVjkBh1mA2CJLuNFZlI6UkKrgAbXWPt8bqt5XudxSGJg/auh/IeYO9o63FWll2h/tvGridd5Ar9ZmNcH89uesyHBypMe82FtXM42GkSOnO4AMFpFcwH8L+Yh73NAXTEe5torFwQNoFM4G6QQ==" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Hotel;