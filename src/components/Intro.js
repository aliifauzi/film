import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Nonton Gratis</div>
            <div className="title">Tanpa perlu Ribet keluar rumah</div>
            <div className="introButton mt-5 text-center">
              <Button href="#anime" variant="warning">
                Lihat semua List
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
