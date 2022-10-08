import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function MainNavbar() {
    const { t } = useTranslation();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{t("APP.TITLE")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#beginner">{t("MAIN_NAVBAR.BEGINNER")}</Nav.Link>
                <Nav.Link href="#advanced">{t("MAIN_NAVBAR.ADVANCED")}</Nav.Link>
                <Nav.Link href="#clubs">{t("MAIN_NAVBAR.CLUBS")}</Nav.Link>
                <Nav.Link href="#jobs">{t("MAIN_NAVBAR.JOBS")}</Nav.Link>
            </Nav>
            <Navbar.Collapse className="justify-content-end">
                <LanguageSwitcher />
            </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;