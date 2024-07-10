import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from "react-bootstrap";
import blackCloverImage from "../assets/img/poster/blackclover.jpg";
import bleachImage from "../assets/img/poster/bleach.jpg";
import jujutsukaisenImage from "../assets/img/poster/jujutsukaisen.jpg";
import kimetsunoyaibaImage from "../assets/img/poster/kimetsunoyaiba.jpg";
import narutoImage from "../assets/img/poster/naruto.jpg";
import swordartonlineImage from "../assets/img/poster/swordartonline.jpg";

const Anime = () => {
  return (
    <Container>
      <h1 className="text-white text-center pt-5 title">Anime Movie </h1>
      <Row>
        <Col sm={6} md={4} className="movieWrapper">
          <Card className="bg-dark movieImage mt-5" id="anime">
            <Image src={blackCloverImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">Black Clover</Card.Title>
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
          <Card className="bg-dark movieImage mt-5 ">
            <Image src={bleachImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">bleach</Card.Title>
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
          <Card className="bg-dark movieImage mt-5 ">
            <Image src={jujutsukaisenImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">
                Jujutsu Kaisen
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
          <Card className="bg-dark movieImage mt-5 ">
            <Image src={kimetsunoyaibaImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">
                Kimetsu No Yaiba
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
          <Card className="bg-dark movieImage mt-5 ">
            <Image src={narutoImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">Naruto</Card.Title>
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
          <Card className="bg-dark movieImage mt-5 ">
            <Image src={swordartonlineImage} alt="aot Movie" />
            <div className="p-1 m-2 text-white ">
              <Card.Title className="text-center mt-2">
                Sword Art Online
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
      </Row>
    </Container>
  );
};

export default Anime;
