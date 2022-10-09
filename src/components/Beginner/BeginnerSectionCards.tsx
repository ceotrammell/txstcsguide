import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";

function BeginnerSectionCards() {
    const { t } = useTranslation();

  return (
      <Container fluid className="max-width px-5 my-5">
        <div className="col-lg-6 col-xl-4">
            <div className="card mb-5 mb-xl-0">
                <div className="card-body p-5 d-flex flex-column">
                    <div className="mb-3">
                        <span className="display-6 fw-bold">CatsWeb</span>
                    </div>
                    <ul className="list-unstyled mb-4">
                        <span className="text-muted d-flex fw-bold justify-content-start text-start">TXST admin hub</span>
                        <div className="li-container">
                            <li className="mb-2 justify-content-start text-start">
                                <i className="text-primary"></i>
                                register for classes
                            </li>
                            <li className="mb-2 justify-content-start text-start">
                                <i className="bi text-primary"></i>
                                see your degree audit
                            </li>
                        </div>
                    </ul>
                    <a href="https://www.catsweb.txstate.edu/students.html" 
                        className="btn btn-lg btn-block btn-outline-primary mt-auto" 
                        role="button" target="_blank" rel="noopener noreferrer">
                        Go
                    </a>
                </div>
            </div>
        </div>
      </Container>
  );
}

export default BeginnerSectionCards;