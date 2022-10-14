import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { ClubCardData } from '../../constants/ClubCardData';
import uuid from "react-uuid";
import { Col, Row } from 'react-bootstrap';

function ClubsSectionCards() {
    const { i18n } = useTranslation();

  return (
    <Container fluid className="max-width px-5 my-5">
        <Row gutter={40}>
            {(ClubCardData).map(x => {
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
                    {data?.links?.map(links => {
                        return (
                            <div key={uuid()} className="card-body p-1 d-flex flex-column">
                                <a href={links?.link} 
                                        className="btn btn-lg btn-block btn-outline-primary mt-auto" 
                                        role="button" target="_blank" rel="noopener noreferrer">
                                    {links?.title} 
                                </a>
                            </div>
                        );
                    })}
                </Col>
            )}
        )}
        </Row>
    </Container>
  );
}

export default ClubsSectionCards;