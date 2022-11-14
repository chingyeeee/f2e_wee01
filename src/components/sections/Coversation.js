import { Container } from "react-bootstrap";
import { Section } from "../layouts/Section";
import styled from "styled-components";
import RectSmall from "../../assets/conversations/rect_01.svg";
import Star from "../../assets/conversations/star.svg";
import ChatOne from "../../assets/conversations/chat_01.svg";
import ChatTwo from "../../assets/conversations/chat_02.svg";
import ChatThree from "../../assets/conversations/chat_03.svg";
import QuestionMark from "../../assets/conversations/questionMark.svg";
import ExclamationMark from "../../assets/conversations/exclamationMark.svg";
import Ball from "../../assets/conversations/ball.svg";
import Triangle from "../../assets/conversations/triangle.svg";
import RectBig from "../../assets/conversations/rect_02.svg";
import At from "../../assets/conversations/at.svg";
import { Image, ImageWrapper } from "../layouts/Image";
import { colors } from "../common/colors";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ChatSec = styled(Section)`
  height: 100vh;
  background-color: ${colors.n3};
  padding: 0;
  position: relative;
  overflow: hidden;
`;

const ChatWrapper = styled.div`
  width: 80%;
  margin: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const EachSection = styled.div`
  height: 33vh;
  position: relative;
  padding-top: 24px;
`;

const DecoRectSmall = styled(ImageWrapper)`
  position: absolute;
  top: 2%;
  left: 20%;
  width: 25%;
`;

const DecoStar = styled(ImageWrapper)`
  position: absolute;
  top: 15%;
  left: 50%;
  width: 5%;
`;

const FristChat = styled(ImageWrapper)`
  position: absolute;
  top: 45%;
  left: 12%;
  width: 50%;
`;

const DecoQuestion = styled(ImageWrapper)`
  position: absolute;
  top: 28%;
  left: 65%;
  width: 17%;
`;

const DecoExclamation = styled(ImageWrapper)`
  position: absolute;
  top: 40%;
  left: 13%;
  width: 20%;
`;

const DecoBall = styled(ImageWrapper)`
  position: absolute;
  top: 37%;
  left: 38%;
  width: 4%;
`;

const SecondChat = styled(ImageWrapper)`
  position: absolute;
  top: -20%;
  left: 48%;
  width: 50%;
`;

const DecoRectBig = styled(ImageWrapper)`
  position: absolute;
  top: -33%;
  left: 36%;
  width: 36%;
`;

const DecoTriangle = styled(ImageWrapper)`
  position: absolute;
  top: -35%;
  left: 78%;
  width: 14%;
`;

const ThirdChat = styled(ImageWrapper)`
  position: absolute;
  top: 17%;
  left: 16%;
  width: 50%;
`;

const DecoAt = styled(ImageWrapper)`
  position: absolute;
  top: 15%;
  left: 70%;
  width: 20%;
`;

export const Conversation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sec = useRef();

  function hide(element) {
    gsap.set(element, { scale: 0, opacity: 0, visibility: "hidden" });
  }

  function animated(element) {
    element.style.opacity = 0;
    gsap.fromTo(
      element,
      { scale: 0, opacity: 0, visibility: "hidden" },
      {
        duration: 1,
        delay: 0.2,
        scale: 1,
        visibility: "visible",
        opacity: "1",
        ease: "bounce",
      }
    );
  }

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".each-sec").forEach((element) => {
        hide(element);
        ScrollTrigger.create({
          trigger: element,
          markers: false,
          start: "top 75%",
          end: "top top",
          onEnter: function () {
            animated(element);
          },
          onEnterBack: function () {
            animated(element);
          },
          onLeave: function () {
            hide(element);
          },
        });
      }, sec);

      return () => ctx.revert();
    });
  }, []);

  return (
    <ChatSec ref={sec} className="chat-sec">
      <Container>
        <ChatWrapper>
          <EachSection className="each-sec first-chat">
            <DecoRectSmall>
              <Image src={RectSmall} />
            </DecoRectSmall>
            <DecoStar>
              <Image src={Star} />
            </DecoStar>
            <FristChat>
              <Image src={ChatOne} />
            </FristChat>
            <DecoQuestion>
              <Image src={QuestionMark} />
            </DecoQuestion>
          </EachSection>
          <EachSection className="each-sec second-chat">
            <DecoExclamation>
              <Image src={ExclamationMark} />
            </DecoExclamation>
            <DecoBall>
              <Image src={Ball} />
            </DecoBall>
            <SecondChat>
              <Image src={ChatTwo} />
            </SecondChat>
          </EachSection>
          <EachSection className="each-sec third-chat">
            <DecoRectBig>
              <Image src={RectBig} />
            </DecoRectBig>
            <DecoTriangle>
              <Image src={Triangle} />
            </DecoTriangle>
            <ThirdChat>
              <Image src={ChatThree} />
            </ThirdChat>
            <DecoAt>
              <Image src={At} />
            </DecoAt>
          </EachSection>
        </ChatWrapper>
      </Container>
    </ChatSec>
  );
};
