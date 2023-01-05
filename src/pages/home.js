import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from "../containers/footer";
import { FaqsContainer } from "../containers/faqs";
import {Feature,  OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const {t} = useTranslation()
  return (
    <>
    <HeaderContainer>
      <Feature>
        <Feature.Title>
          
          {t("Unlimited")}
          {/* Unlimited films, TV Programmes and more. */}
        </Feature.Title>
        <Feature.SubTitle>
        {t("Watch-anywhere")}
        </Feature.SubTitle>

        <OptForm.Text>{t("Ready-to-watch")}</OptForm.Text>
        <OptForm>
        <OptForm.Input placeholder={t("Email")} />
        <OptForm.Button>{t("Get-Started")}</OptForm.Button>
        <OptForm.Break />
      </OptForm>
      </Feature>
    
    </HeaderContainer>

      <JumbotronContainer />;
      <FaqsContainer />;
      <FooterContainer />;
    </>
  )
}