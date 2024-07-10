import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/">Animeku</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">Trending</Nav.Link>
          <Nav.Link href="#anime">Anime</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
