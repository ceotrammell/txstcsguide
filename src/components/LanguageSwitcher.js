import React from "react";
import { useTranslation } from "react-i18next";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      <NavDropdown bg="dark" variant="dark" className="text-light"
        value={i18n.language}
        title={t("LANGUAGE_FULL")}
        id={`offcanvasNavbarDropdown-expand-lg`}>
        <NavDropdown.Item onClick={(e) => i18n.changeLanguage('en')}>
        {t("LANGUAGES.ENGLISH")}
        </NavDropdown.Item>
        <NavDropdown.Item onClick={(e) => i18n.changeLanguage('es')}>
        {t("LANGUAGES.SPANISH")}
        </NavDropdown.Item>
      </NavDropdown>
      </Nav>
      </Navbar.Collapse>
  );
}

export default LanguageSwitcher;