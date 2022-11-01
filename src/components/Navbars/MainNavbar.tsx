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
import Beginner from '../../views/Beginner/beginner';
import uuid from "react-uuid";

function MainNavbar() {
  const { t } = useTranslation();
  let aria = uuid();

  return (
    <div>
      <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">     {t("APP.TITLE")}</Navbar.Brand>
        <Navbar.Toggle aria-controls={aria} />
        <Navbar.Collapse id={aria}>
            <Nav className="me-auto">
              <Nav.Link href="/beginner" aria-required="true" aria-label={t("MAIN_NAVBAR.BEGINNER.ALT")}> {t("MAIN_NAVBAR.BEGINNER.TITLE")}</Nav.Link>
              <Nav.Link href="/advanced" aria-required="true" aria-label={t("MAIN_NAVBAR.ADVANCED.ALT")}> {t("MAIN_NAVBAR.ADVANCED.TITLE")}</Nav.Link>
              <Nav.Link href="/clubs"    aria-required="true" aria-label={t("MAIN_NAVBAR.CLUBS.ALT")}>    {t("MAIN_NAVBAR.CLUBS.TITLE")}</Nav.Link>
              <Nav.Link href="/jobs"     aria-required="true" aria-label={t("MAIN_NAVBAR.JOBS.ALT")}>     {t("MAIN_NAVBAR.JOBS.TITLE")}</Nav.Link>
            </Nav>
                <Nav className="justify-content-end">
                  <Nav.Link
                  href="https://github.com/ceotrammell/txstcsguide"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} size="lg" className='px-3'/>
                  <span className="visually-hidden" aria-required="true" aria-label={t("MAIN_NAVBAR.GITHUB.ALT")}>{t("MAIN_NAVBAR.GITHUB.TITLE")}</span>
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
          <Route path='/beginner' element={<Beginner/>} />
          <Route path='/advanced' element={<Advanced/>} />
          <Route path='/clubs'    element={<Clubs/>} />
          <Route path='/jobs'     element={<Jobs/>} />
        </Routes>
      </div>
    </div>
  );
}

export default MainNavbar;