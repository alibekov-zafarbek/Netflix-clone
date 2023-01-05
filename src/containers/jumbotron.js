import React from "react";
import jumboData from "../fixtures/jumbo.json";
import { Jumbotron } from "../components";
import { useTranslation } from "react-i18next";

export function JumbotronContainer() {
  const { t } = useTranslation();
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>
              {t(item.title.replace(/ /g, "-"))}
            </Jumbotron.Title>
            <Jumbotron.SubTitle>
              {t(item.subTitle.replace(/ /g, "-"))}
            </Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
            <Jumbotron.Wrapper>
              <Jumbotron.Video  autoPlay  playsInline loop>
                <source src={item?.video} type="video/mp4" />
              </Jumbotron.Video>
            </Jumbotron.Wrapper>
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
