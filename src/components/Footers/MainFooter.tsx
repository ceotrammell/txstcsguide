import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from "react-i18next";

function MainFooter() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
      <Navbar bg="dark" variant="dark" className='footer-pin-container'>
        <Container>
              <Nav className="me-auto text-light footer-pin-child">
              </Nav>
                  <Nav className="justify-content-end">
                      <Nav.Link
                          href="https://cs.txstate.edu/"
                          target="_blank"
                          rel="noopener noreferrer">
                          {t("MAIN_FOOTER.TXST_CS")}
                      </Nav.Link>
                      <Nav.Link className='noHover'>&bull;</Nav.Link>
                      <Nav.Link
                          href="https://github.com/ceotrammell/txstcsguide"
                          target="_blank"
                          rel="noopener noreferrer">
                          {t("MAIN_FOOTER.GITHUB")}
                      </Nav.Link>
                </Nav>
        </Container>
    </Navbar>
      </div>
    </div>
  );
}

export default MainFooter;