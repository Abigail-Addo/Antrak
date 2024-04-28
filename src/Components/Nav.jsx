import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useLocation } from "react-router-dom";
import Logo from "../assets/icons/logo-transparent-bg-w.svg";

const Navb = () => {
  const location = useLocation();
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
            width: "8rem",
            padding: 0,
          }}
        >
          <img src={Logo} alt="logo" width="100%" height="4%" />
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
                <Nav.Link
                  href="/"
                  className={`offcanvas-navbar nav-link me-md-5 ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <div className="nav-item">Home</div>
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  className={`nav-link me-md-5 ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  <div className="nav-item">About</div>
                </Nav.Link>
                <Nav.Link
                  href="/services"
                  className={`nav-link me-md-5 ${
                    location.pathname === "/services" ? "active" : ""
                  }`}
                >
                  <div className="nav-item">Services</div>
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  className={`nav-link me-md-5 ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  <div className="nav-item">Contact</div>
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
