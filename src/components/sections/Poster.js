import { Section } from "../layouts/Section";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Image, ImageWrapper } from "../layouts/Image";
import WebBanner from "../../assets/poster/web_banner.svg";
import Background from "../../assets/poster/background.svg";
import LeftHand from "../../assets/poster/icon-lefthand.svg";
import RightHand from "../../assets/poster/icon-righthand.svg";
import Title from "../../assets/poster/icon-title.svg";
import Frontend from "../../assets/poster/icon-frontend.svg";
import Uiux from "../../assets/poster/icon-uiux.svg";
import { H4 } from "../common/typography";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PostSec = styled(Section)`
  background-image: url(${Background});
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 11vh 0;
  height: 78vh;
  overflow: hidden;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  text-align: center;
`;

const Subtitle = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 48px;
  justify-content: center;
  transform: translateX(-10px);
`;

const IconFrontend = styled(ImageWrapper)`
  position: absolute;
  top: -80px;
  right: 300px;
`;

const IconUiux = styled(ImageWrapper)`
  position: absolute;
  bottom: -220px;
  left: 100px;
`;

const Banner = styled(ImageWrapper)`
  z-index: 3;
  width: 150%;
`;

export const Poster = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sec = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: ".top-banner",
          markers: false,
          start: "top 20%",
        },
      });

      tl.current
        .to(
          ".top-banner",
          {
            xPercent: "-33",
            ease: "none",
            duration: 3,
          },
          "<"
        )
        .fromTo(
          ".bottom-banner",
          { xPercent: "-33" },
          {
            xPercent: "0",
            ease: "none",
            duration: 3,
          },
          "<"
        )
        .from(".title", { scale: 0, duration: 1, ease: "expo" }, "<")
        .from(".subtitle", { scale: 0, duration: 1, ease: "expo" }, "<")
        .from(
          ".left-hand",
          {
            x: 400,
            opacity: 0,
            ease: "none",
            duration: 0.5,
          },
          "<"
        )
        .from(
          ".right-hand",
          {
            x: -400,
            opacity: 0,
            ease: "none",
            duration: 0.5,
          },
          "<"
        )
        .from(
          ".frontend",
          {
            x: 100,
            y: -200,
            rotate: 400,
            scale: 0.5,
            opacity: 0,
            ease: "none",
            duration: 0.8,
          },
          "<"
        )
        .from(
          ".uiux",
          {
            x: -100,
            y: 200,
            rotate: -200,
            scale: 0.5,
            opacity: 0,
            ease: "none",
            duration: 0.8,
          },
          "<"
        );
    }, sec);
    return () => ctx.revert();
  }, []);

  return (
    <PostSec ref={sec} className="poster">
      <Banner className="top-banner">
        <Image src={WebBanner} />
      </Banner>
      <Container className="position-relative">
        <IconFrontend className="frontend">
          <Image src={Frontend} />
        </IconFrontend>

        <Main>
          <Content>
            <ImageWrapper className="left-hand">
              <Image src={LeftHand} />
            </ImageWrapper>
            <ImageWrapper className="title">
              <Image src={Title} />
            </ImageWrapper>
            <ImageWrapper className="right-hand">
              <Image src={RightHand} />
            </ImageWrapper>
          </Content>
          <Subtitle className="subtitle">
            <H4 bold>前端工程師</H4>
            <H4 bold>X</H4>
            <H4 bold>UI設計師</H4>
          </Subtitle>
        </Main>
        <IconUiux className="uiux">
          <Image src={Uiux} />
        </IconUiux>
      </Container>
      <Banner className="bottom-banner">
        <Image src={WebBanner} />
      </Banner>
    </PostSec>
  );
};
