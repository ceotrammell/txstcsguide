import React from "react";
import { useTranslation } from "react-i18next";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import uuid from "react-uuid";

function setLanguageStorage(lang) {
  localStorage.setItem("language", JSON.stringify(lang))
}

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  let aria = uuid();

  return (
    <Navbar.Collapse id={aria}>
      <Nav className="me-auto">
        <NavDropdown variant="dark" className="text-light"
          value={i18n.language}
          title={t("LANGUAGE_FULL")}
          id={`offcanvasNavbarDropdown-expand-lg`}>
          <NavDropdown.Item onClick={(e) => i18n.changeLanguage('en') && setLanguageStorage('en')}>
          {t("LANGUAGES.ENGLISH")}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={(e) => i18n.changeLanguage('es') && setLanguageStorage('es')}>
          {t("LANGUAGES.SPANISH")}
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  );
}

export default LanguageSwitcher;