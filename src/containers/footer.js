import React from "react";
import { Footer } from "../components";
import i18next from "i18next";
import { useTranslation } from 'react-i18next';

const langs = [
  {name: "English", key: "en"},
  {name: "Русский", key: "ru"},
];

export function FooterContainer() {
const {t} = useTranslation()


  
  return (
    <Footer>
      <Footer.Title>{t("Questions")}</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">{t("FAQ")}</Footer.Link>
          <Footer.Link href="#">{t("Investor")}</Footer.Link>
          <Footer.Link href="#">{t("Privacy")}</Footer.Link>
          <Footer.Link href="#">{t("Speed")}</Footer.Link>
          {/* <Footer.Link href="#">{t("Netflix")}</Footer.Link> */}
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">{t("Help")}</Footer.Link>
          <Footer.Link href="#">{t("Jobs")}</Footer.Link>
          <Footer.Link href="#">{t("Cookie")}</Footer.Link>
          <Footer.Link href="#">{t("Legal")}</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">{t("Account")}</Footer.Link>
          <Footer.Link href="#">{t("Ways")}</Footer.Link>
          <Footer.Link href="#">{t("Corporate")}</Footer.Link>
          <Footer.Link href="#">{t("Only")}</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">{t("Media")}</Footer.Link>
          <Footer.Link href="#">{t("Term")}</Footer.Link>
          <Footer.Link href="#">{t("Contact")}</Footer.Link>
          {/* <Footer.Link href="#">{t("Buy")}</Footer.Link> */}
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />

      <Footer.Wrapper>
        <Footer.Language
          onChange={(e) => i18next.changeLanguage(e.target.value)}
        >
          {langs.map((lng) => (
            <option
              key={lng.key}
              value={lng.key}
              
              defaultValue={i18next.resolvedLanguage === lng.key}
            >
              {lng.name}
            </option>
          ))}
        </Footer.Language>
      </Footer.Wrapper>
      <Footer.Text>Netflix {localStorage.getItem('location')}</Footer.Text>
    </Footer>
  );
}
