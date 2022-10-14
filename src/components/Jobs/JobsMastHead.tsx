import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";

function JobsMastHead() {
    const { t } = useTranslation();

  return (
      <Container fluid className="max-width px-5 my-5">
         <div className="text-center mb-5">
            <h1 className="fw-bolder display-3">{t("JOBS.MAST_HEAD.TITLE")}</h1>
            <p className="lead fw-normal text-muted mb-0">{t("JOBS.MAST_HEAD.SUB_TITLE")}</p>
        </div>
      </Container>
  );
}

export default JobsMastHead;