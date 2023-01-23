import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { BeginnerCardData } from '../../constants/BeginnerCardData';
import uuid from "react-uuid";
import { Col, Row } from 'react-bootstrap';

function BeginnerSectionCards() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

  return (
    <Container fluid className="max-width px-5 my-5">
        <Row gutter={40}>
            {(BeginnerCardData).map(x => {
                let data = x[`${i18n.language}` || 'en'];
                return (
                <Col className="card-body p-3 m-2 d-flex flex-column card mb-5 mb-xl-0"
                    key={uuid()}
                    xs={{ span: 8 }} 
                    sm={{ span: 8 }}
                    md={{ span: 6 }}
                    lg={{ span: 3 }} 
                    xl={{ span: 3 }}>
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
                        aria-label={t("APP.CLICK_TO") + data?.title + t("APP.WEB_PAGE") + t("APP.WILL_NAVIGATE_AWAY")}
                        className="btn btn-lg btn-block btn-outline-primary mt-auto" 
                        role="button" target="_blank" rel="noopener noreferrer">
                        {t("BEGINNER.CARDS.GO")}
                    </a>
                </Col>
            )}
        )}
        </Row>
    </Container>
  );
}

export default BeginnerSectionCards;