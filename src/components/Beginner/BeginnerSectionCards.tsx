import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { BeginnerCardData } from '../../constants/BeginnerCardData';
import uuid from "react-uuid";

function BeginnerSectionCards() {
    const { t } = useTranslation();

  return (
      <Container fluid className="max-width px-5 my-5">
        {BeginnerCardData.map(data => {
                return (
                <div key={uuid()}>
                    <div className="col-lg-6 col-xl-4">
                        <div className="card mb-5 mb-xl-0">
                            <div className="card-body p-5 d-flex flex-column">
                                <div className="mb-3">
                                    <span className="display-6 fw-bold">{data?.title}</span>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    <span className="text-muted d-flex fw-bold justify-content-start text-start">{data?.sub_title}</span>
                                    {data?.li_items?.map(li => {
                                        return (
                                        <div key={uuid()}>
                                            <div className="li-container">
                                                <li className="mb-2 justify-content-start text-start">
                                                <i className="text-primary"></i>
                                                    {li}
                                                </li>
                                            </div>
                                        </div>
                                        );
                                    })}
                                </ul>
                                <a href={data?.link} 
                                    className="btn btn-lg btn-block btn-outline-primary mt-auto" 
                                    role="button" target="_blank" rel="noopener noreferrer">
                                    {t("BEGINNER.CARDS.GO")}
                                </a>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
                );
            })}
      </Container>
  );
}

export default BeginnerSectionCards;