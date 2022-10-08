import React from "react";
import { useTranslation } from "react-i18next";
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  return (
    <div className="select">
      <select
        value={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        }
      >
        <option value="en">{t("LANGUAGES.ENGLISH")}</option>
        <option value="es">{t("LANGUAGES.SPANISH")}</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;