import styled from "styled-components";
import { colors } from "./colors";

const fontSize = {
  h1: "48px",
  h2: "40px",
  h3: "32px",
  h4: "24px",
  h5: "20px",
  title: "16px",
  subtitle: "14px",
  p1: "24px",
  p2: "20px",
  p3: "16px",
  p4: "14px",
  caption: "12px",
};

export const H1 = styled.h1`
  font-size: ${fontSize.h1};
  line-height: 72px;
  letter-spacing: ${(props) => (props.eng ? "0.1em" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const H2 = styled.h2`
  font-size: ${fontSize.h2};
  line-height: 60px;
  letter-spacing: ${(props) => (props.eng ? "0.1em" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const H3 = styled.h3`
  font-size: ${fontSize.h3};
  line-height: 48px;
  letter-spacing: ${(props) => (props.eng ? "0.1em" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const H4 = styled.h4`
  font-size: ${fontSize.h4};
  line-height: 36px;
  letter-spacing: ${(props) => (props.eng ? "0.1em" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const Title = styled.h5`
  font-size: ${fontSize.title};
  line-height: 20px;
  letter-spacing: ${(props) => (props.eng ? "0.1em" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const Subtitle = styled.p`
  font-size: ${fontSize.subtitle};
  line-height: 18px;
  letter-spacing: ${(props) => (props.eng ? "0.1em" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const P1 = styled.p`
  font-size: ${fontSize.p1};
  line-height: 36px;
  font-weight: ${(props) => (props.medium ? 700 : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const P2 = styled.p`
  font-size: ${fontSize.p1};
  line-height: 28px;
  font-weight: ${(props) => (props.medium ? 700 : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const P3 = styled.p`
  font-size: ${fontSize.p3};
  line-height: 20px;
  font-weight: ${(props) => (props.medium ? 700 : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const P4 = styled.p`
  font-size: ${fontSize.p4};
  line-height: 18px;
  font-weight: ${(props) => (props.medium ? 700 : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;

export const Caption = styled.p`
  font-size: ${fontSize.caption};
  line-height: 16px;
  font-weight: ${(props) => (props.medium ? 700 : 400)};
  font-family: ${(props) => (props.eng ? "Montserrat" : "Noto Sans CJK TC")};
  color: ${(props) => (props.white ? colors.white : colors.black)};
`;
