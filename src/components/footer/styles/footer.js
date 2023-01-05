import styled from "styled-components/macro";

export const Container = styled.div`
 display: flex;
 padding: 70px 56px;
 margin: auto;
 max-width: 1000px;
 flex-direction: column;

 @media (max-width: 1000px) {
     padding: 70px 30px;
 }
`;

export const Column = styled.div`
 display: flex;
 flex-direction: column;
 text-align: left;

`;

export const Row =styled.div`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
 grid-gap: 15px;

 @media (max-width: 1000) {
     grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) ;
 }

`;

export const Link = styled.a`
 color: #757575;
 margin-bottom: 20px;
 font-size: 14px;
 text-decoration: none;

`;

export const Title = styled.p`
 font-style: 16px;
 color: #757575;
 margin-bottom: 40px;
`;

export const Text = styled.p`
 font-style: 16px;
 color: #757575;
 margin-bottom: 40px;
`;

export const Break = styled.p`
 flex-basis: 100% ;
 height: 0;
`;
export const Wrapper = styled.div`
position: relative;
&::before {
    content: "";
    background: url(https://cdn1.iconfinder.com/data/icons/social-object-set-5/74/34-512.png) no-repeat ;
    background-size: 12px 14px;

    width: 12px !important;
    height: 14px !important;
    color: #fff;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    font-family: nf-icon;
    font-size: 15px;
    pointer-events: none;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(233deg)
    brightness(105%) contrast(102%);
  }
  `

export const Language = styled.select`
  padding: 0.5rem 1.375rem;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-size: 0.875rem;
  border: 1px solid #aaa;
  text-transform: none;
`;