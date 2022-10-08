import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher";
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../../views/Home/Home';
import Advanced from '../../views/Advanced/Advanced';
import Clubs from '../../views/Clubs/Clubs';
import Jobs from '../../views/Jobs/Jobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

function MainNavbar() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">     {t("APP.TITLE")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/advanced"> {t("MAIN_NAVBAR.ADVANCED")}</Nav.Link>
                <Nav.Link href="/clubs">    {t("MAIN_NAVBAR.CLUBS")}</Nav.Link>
                <Nav.Link href="/jobs">     {t("MAIN_NAVBAR.JOBS")}</Nav.Link>
            </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link
                  href="https://github.com/ceotrammell/txstcsguide"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" className='px-3'/>
                  <span className="visually-hidden">{t("MAIN_NAVBAR.GITHUB")}</span>
                </Nav.Link>
                <LanguageSwitcher />
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div>
        <Routes>
          <Route path='/'         element={<Home/>} />
          <Route path='/advanced' element={<Advanced/>} />
          <Route path='/clubs'    element={<Clubs/>} />
          <Route path='/jobs'     element={<Jobs/>} />
        </Routes>
      </div>
    </div>
  );
}

export default MainNavbar;