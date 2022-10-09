import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from "react-i18next";

function MainFooter() {
  const { t } = useTranslation();

  return (
    <div>
      <div>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto text-light">
                {/* leave this here */}
            </Nav>
                <Nav className="justify-content-end text-light">
                    <Nav.Link
                        className="text-light"
                        href="https://cs.txstate.edu/"
                        target="_blank"
                        rel="noopener noreferrer">
                        {t("MAIN_FOOTER.TXST_CS")}
                    </Nav.Link>
                    <Nav.Link className='noHover'>&bull;</Nav.Link>
                    <Nav.Link
                        className="text-light"
                        href="https://github.com/ceotrammell/txstcsguide"
                        target="_blank"
                        rel="noopener noreferrer">
                        {t("MAIN_FOOTER.GITHUB")}
                    </Nav.Link>
              </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </div>
  );
}

export default MainFooter;