import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
  @media (max-width: 1000px ) {
    padding: 70px 45px;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
    margin: auto 0;
  }
`;

export const Pane = styled.div`
position: relative;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-style: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-style: 35px;
  }
`;

export const SubTitle = styled.h2`
  font-style: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-style: 18px;
  }
`;

export const Image = styled.img`
position: relative;
z-index: 2;

  max-width: 100%;
  height: auto;

`;
export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  left: 50%;
  max-height: 54%;
  max-width: 73%;
  position: absolute;
  top: 46%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
export const Video = styled.video`
  height: 100%;
  width: 100%;
  z-index: 0;
`;
