import Link from "next/link";
import { useRouter } from "next/router";

import { Nav, Navbar, Container } from "react-bootstrap";
const Header = () => {
  const router = useRouter();
    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" >
  <Container className="py-2">
    <Link href="/">
          <a className={`navbar-brand ${router.pathname == "/" ? "active" : ""}`}>Arunkumar</a>
    </Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Link href="/technologies">
          <a className={`nav-link ${router.pathname == "/technologies" ? "active" : ""}` }>Technologies</a>
      </Link>

      <Link href="/contact">
          <a className={`nav-link ${router.pathname == "/contact" ? "active" : ""}`}>Contact Me</a>
      </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
  };
  export default Header;