import React from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs';
import { useTranslation } from 'react-i18next';

export function FaqsContainer() {
  const {t} = useTranslation()
  return (
    <Accordion>
      <Accordion.Title>{t('Frequently-Asked-Questions')}</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{t(item.header.replace(/ /g, '-'))}</Accordion.Header>
            <Accordion.Body>{t(item.body.slice(0, 40).replace(/ /g, '-'))}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

        <OptForm.Text>{t("Ready-to-watch")}</OptForm.Text>
      <OptForm>
        <OptForm.Input placeholder={t("Email")} />
        <OptForm.Button>{t("Get-Started")}</OptForm.Button>
        <OptForm.Break />
      </OptForm>
    </Accordion>
  );
}