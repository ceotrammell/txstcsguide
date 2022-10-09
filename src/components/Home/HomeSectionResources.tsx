import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import { faCode, faFolderTree, faPeopleGroup, faIndustry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomeSectionResources() {
    const { t } = useTranslation();

  return (
    <Container fluid className="max-width">
    <section className="py-5" id="features">
            <div className="container px-5 my-5">
                <div className="row gx-5">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h2 className="fw-bolder mb-0">
                            {t("HOME.SECTION_RESOURCES.TITLE")}
                        </h2>
                    </div>
                    <div className="col-lg-8">
                        <div className="row gx-5 row-cols-1 row-cols-md-2">
                            <div className="col mb-5 h-100">
                                <a href="/beginner" className="text-decoration-none">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3 p-3 float-left" style={{width:'20%'}}>
                                        <FontAwesomeIcon style={{width:'50%', height:'50%'}} icon={faCode}/>
                                    </div>
                                </a>
                                <h2 className="h5 d-flex justify-content-start">
                                    {t("HOME.SECTION_RESOURCES.BEGINNER_SECTION.TITLE")}
                                </h2>
                                <p className="mb-0 d-flex justify-content-start text-start">
                                    {t("HOME.SECTION_RESOURCES.BEGINNER_SECTION.BODY")}
                                </p>
                            </div>
                            <div className="col mb-5 h-100">
                                <a href="/advanced" className="text-decoration-none">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3 p-3 float-left" style={{width:'20%'}}>
                                        <FontAwesomeIcon style={{width:'50%', height:'50%'}} icon={faFolderTree}/>
                                    </div>
                                </a>
                                <h2 className="h5 d-flex justify-content-start">
                                    {t("HOME.SECTION_RESOURCES.ADVANCED_SECTION.TITLE")}
                                </h2>
                                <p className="mb-0 d-flex justify-content-start text-start">
                                    {t("HOME.SECTION_RESOURCES.ADVANCED_SECTION.BODY")}
                                </p>
                            </div>
                            <div className="col mb-5 mb-md-0 h-100">
                                <a href="/clubs" className="text-decoration-none">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3 p-3 float-left" style={{width:'20%'}}>
                                        <FontAwesomeIcon style={{width:'50%', height:'50%'}} icon={faPeopleGroup}/>
                                    </div>
                                </a>
                                <h2 className="h5 d-flex justify-content-start">
                                    {t("HOME.SECTION_RESOURCES.CLUB_SECTION.TITLE")}
                                </h2>
                                <p className="mb-0 d-flex justify-content-start text-start">
                                    {t("HOME.SECTION_RESOURCES.CLUB_SECTION.BODY")}
                                </p>
                            </div>
                            <div className="col h-100">
                                <a href="/jobs" className="text-decoration-none">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3 p-3 float-left" style={{width:'20%'}}>
                                        <FontAwesomeIcon style={{width:'50%', height:'50%'}} icon={faIndustry}/>
                                    </div>
                                </a>
                                <h2 className="h5 d-flex justify-content-start">
                                    {t("HOME.SECTION_RESOURCES.JOB_SECTION.TITLE")}
                                </h2>
                                <p className="mb-0 d-flex justify-content-start text-start">
                                    {t("HOME.SECTION_RESOURCES.JOB_SECTION.BODY")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
  );
}

export default HomeSectionResources;