import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

import i18next from "i18next";
// import { useTranslation } from 'react-i18next';

const langs = [
  { name: "English", key: "en" },
  { name: "Русский", key: "ru" },
];
export function HeaderContainer({ children }) {
  // const { t } = useTranslation();
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.Wrapper>
          <div>
            <Header.Language
              onChange={(e) => i18next.changeLanguage(e.target.value)}
            >
              {langs.map((lng) => (
                <option
                  key={lng.key}
                  value={lng.key}
                  selected={i18next.resolvedLanguage === lng.key}
                >
                  {lng.name}
                </option>
              ))}
            </Header.Language>
          </div>

          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Wrapper>
      </Header.Frame>
      {children}
    </Header>
  );
}
