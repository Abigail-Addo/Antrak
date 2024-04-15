import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navb = () => {
  return (
    <>
      <Navbar
        expand="lg"
        className="sticky-top sticky"
        style={{
          backgroundColor: "#5fbdff",
          zIndex: "1",
          transition: "background-color 0.5s ease-in",
        }}
      >
        <Nav.Link
          href="/"
          className="ms-lg-5"
          style={{
            fontWeight: 700,
            color: "#030637",
            width: "6rem",
            padding: 0,
            marginLeft: "1rem",
          }}
        >
          Antrak Exports LLC
        </Nav.Link>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          style={{
            color: "#030637",
            border: 0,
            outline: 0,
          }}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          style={{
            zIndex: "10000",
            backgroundColor: "#5fbdff",
            width: "50%",
          }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id="offcanvasNavbarLabel-expand-lg"
              style={{
                color: "#030637",
                width: "8rem",
                padding: 0,
                margin: 0,
              }}
            ></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Container fluid className="container">
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link href="/" className="pe-md-5">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="pe-md-5 ">
                  About
                </Nav.Link>
                <Nav.Link href="/services" className="pe-md-5">
                  Services
                </Nav.Link>
                <Nav.Link href="/contact" className="pe-md-5">
                  Contact
                </Nav.Link>
              </Nav>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
};

export default Navb;
