import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import aotImage from "../assets/img/trending/aot.jpg";
import hxhImage from "../assets/img/trending/hxh.jpg";
import onepieceImage from "../assets/img/trending/onepiece.jpg";
import windbreakerImage from "../assets/img/trending/windbreaker.jpg";
import noblesseImage from "../assets/img/trending/noblesse.jpg";
import soloLevelingImage from "../assets/img/trending/sololeveling.jpg";

const Trending = () => {
  return (
    <Container>
      <h1 className="text-white text-center pt-5 title">Trending Movies </h1>
      <Row>
        <Col sm={6} md={4} className="movieWrapper">
          <Card className="bg-dark movieImage mt-3 mb-5" id="trending">
            <Image src={aotImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">
                Attack On Titan
              </Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>

        <Col sm={6} md={4} className="movieWrapper">
          <Card className="bg-dark movieImage mt-3 mb-5 ">
            <Image src={hxhImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">
                Hunter x Hunter
              </Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>

        <Col sm={6} md={4} className="movieWrapper">
          <Card className="bg-dark movieImage mt-3 mb-5 ">
            <Image src={onepieceImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">One Piece</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>

        <Col sm={6} md={4} className="movieWrapper">
          <Card className="bg-dark movieImage mt-3 mb-5 ">
            <Image src={windbreakerImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">Wind Breaker</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>

        <Col sm={6} md={4} className="movieWrapper">
          <Card className="bg-dark movieImage mt-3 mb-5 ">
            <Image src={soloLevelingImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">
                Solo Leveling
              </Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>

        <Col sm={6} md={4} className="movieWrapper">
          <Card className="bg-dark movieImage mt-3 mb-5 ">
            <Image src={noblesseImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">Noblesse</Card.Title>
              <Card.Text className="text-left">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              <Card.Text className="text-left">
                Last updated 3 mins ago
              </Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Trending;
