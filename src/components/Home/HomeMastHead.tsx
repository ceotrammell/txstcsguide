import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import csPic from '../../assets/imgs/cs-pic.jpeg';

function HomeMastHead() {
    const { t } = useTranslation();

  return (
      <Container fluid className="bg-dark max-width">
        <header className="bg-dark max-width">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">
                                {t("APP.SLOGAN")}
                                </h1>
                                <p className="lead fw-normal text-white-50 mb-4">
                                {t("APP.SUB_SLOGAN")}
                                </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="/beginner">
                                      {t("HOME.MAST_HEAD.START_HERE")}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                          <img className="img-fluid rounded-3 my-5" src={csPic} alt={t("HOME.MAST_HEAD.CS_PIC_ALT")} /></div>
                    </div>
                </div>
            </header>
      </Container>
  );
}

export default HomeMastHead;