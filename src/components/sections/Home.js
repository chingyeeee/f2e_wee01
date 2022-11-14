import { Image, ImageWrapper } from "../layouts/Image";
import BigTitle from "../../assets/title/THE F2E.svg";
import Number from "../../assets/title/4th.svg";
import iconCode from "../../assets/icons/icon-code.svg";
import iconBoard from "../../assets/icons/icon-board.svg";
import pathL from "../../assets/paths/path_left.svg";
import pathR from "../../assets/paths/path_right.svg";
import styled, { keyframes } from "styled-components";
import { Container } from "react-bootstrap";
import { H1 } from "../common/typography";
import { Section } from "../layouts/Section";
import { Link } from "react-router-dom";
import { colors } from "../common/colors";
import { gsap } from "gsap";
import WebJoinUs from "../../assets/paths/web_joinUs.svg";
import { useLayoutEffect, useRef } from "react";

const Head = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  position: relative;
`;

const WebTitle = styled(H1)`
  font-size: 28px;
  text-align: center;
  letter-spacing: 1.5rem;
  margin-top: 2rem;
`;

const Main = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const RightPath = styled(ImageWrapper)`
  max-width: 50%;
  position: absolute;
  right: 0;
  top: 20%;
`;

const LeftPath = styled(ImageWrapper)`
  max-width: 50%;
  position: absolute;
  left: 12%;
  bottom: 10%;
`;

const upDown = keyframes`
  0% {
    transform: translateY(0px);
  }
  25%{
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0px);
  }
  75%{
    transform: translateY(-10px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const IconCode = styled(ImageWrapper)`
  position: relative;
  right: 18%;
  top: -50px;
  animation: ${upDown} 6s 2.2s linear infinite;
`;

const IconBoard = styled(ImageWrapper)`
  animation: ${upDown} 5s 2.5s linear infinite;
`;

const leftRight = keyframes`
 0% {
    transform: translateX(0px);
  }
  25%{
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  75%{
    transform: translateX(-30px);
  }
  100%{
    transform: translateX(0px);
  }
`;

const BtnJoin = styled(Link)`
  background-color: ${colors.btn};
  color: ${colors.black};
  width: 80%;
  margin: 0 0 20px auto;
  padding: 20px 24px;
  border-radius: 50px;
  text-decoration: none;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
  animation: ${leftRight} 5s linear infinite;
  &:hover {
    background-color: ${colors.btnHover};
    box-shadow: 0 0 10px ${colors.yellowShadow};
    color: ${colors.black};
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AnimatedBackground = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  margin-top: 100px;
`;

export const Home = () => {
  const sec = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".loop-bg", {
          xPercent: "50",
          ease: "none",
          duration: 5,
          repeat: -1,
        })
        .from(
          ".big-title",
          {
            y: 100,
            opacity: 0,
            duration: 1,
          },
          "<"
        )
        .fromTo(
          ".number",
          {
            y: 0,
            x: 10,
            opacity: 0,
            duration: 1,
          },
          {
            y: -30,
            x: 10,
            opacity: 1,
            duration: 1,
            delay: 0.3,
          },
          "<"
        )
        .from(
          ".code",
          {
            x: -100,
            opacity: 0,
            duration: 1,
          },
          "<"
        )
        .from(
          ".board",
          {
            x: 100,
            opacity: 0,
            duration: 1,
          },
          "<"
        );
    }, sec);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sec}>
      <Container>
        <Head>
          <ImageWrapper className="big-title">
            <Image src={BigTitle} alt="THE F2E" />
          </ImageWrapper>
          <ImageWrapper className="number">
            <Image src={Number} alt="4th" />
          </ImageWrapper>
          <RightPath>
            <Image src={pathR} />
          </RightPath>
        </Head>
        <Main>
          <IconCode className="code">
            <Image src={iconCode} />
          </IconCode>
          <LeftPath>
            <Image src={pathL} />
          </LeftPath>
          <MainContent>
            <WebTitle white bold>
              互動式網頁設計
            </WebTitle>
            <BtnJoin>立即報名</BtnJoin>
          </MainContent>

          <IconBoard className="board">
            <Image src={iconBoard} />
          </IconBoard>
        </Main>
      </Container>
      <AnimatedBackground>
        <ImageWrapper className="flex-shrink-0">
          <Image className="loop-bg" src={WebJoinUs} />
        </ImageWrapper>
        <ImageWrapper className="flex-shrink-0">
          <Image className="loop-bg" src={WebJoinUs} />
        </ImageWrapper>
        <ImageWrapper className="flex-shrink-0">
          <Image className="loop-bg" src={WebJoinUs} />
        </ImageWrapper>
      </AnimatedBackground>
    </Section>
  );
};
