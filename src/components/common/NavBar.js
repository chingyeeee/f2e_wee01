import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo/logo.svg";
import { Image, ImageWrapper } from "../layouts/Image";
import styled from "styled-components";
import { colors } from "./colors";

const NavLink = styled(Nav.Link)`
  color: ${colors.gray};
  padding: 4px 2px !important;
  margin: 0.5rem;
  position: relative;
  transition: 0.2s;
  @media screen and (min-width: 768px) {
    margin: 0 1rem;
  }
  &:hover {
    color: ${colors.white};
    text-shadow: 0 0 10px ${colors.whiteShadow};
    &::before {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 15px;
      height: 3px;
      background-color: ${colors.g1};
      border-radius: 5px;
      box-shadow: 0 0 10px ${colors.greenShadow};
    }
  }
`;

const NavigationBar = styled(Navbar)`
  background-color: ${colors.n3} !important;
`;

const NavLinkBtn = styled(Nav.Link)`
  display: inline-block;
  color: ${colors.white};
  border: 1px solid ${colors.gray};
  border-radius: 20px;
  padding: 4px 16px !important;
  transition: 0.2s;
  margin: 0.5rem;
  align-self: baseline;
  @media screen and (min-width: 768px) {
    margin: 0 1rem;
  }
  &:hover {
    color: ${colors.g1};
    background-color: ${colors.g1}33;
    box-shadow: 0 0 10px ${colors.greenShadow};
    border: 1px solid ${colors.g1};
  }
`;

export const NavBar = () => {
  return (
    <NavigationBar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <ImageWrapper>
            <Image src={Logo} alt="THE F2E" />
          </ImageWrapper>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink href="#features">關卡資訊</NavLink>
            <NavLink href="#pricing">活動說明</NavLink>
            <NavLink href="#pricing">攻略資源</NavLink>
            <NavLink href="#pricing">求職專區</NavLink>
            <NavLinkBtn href="#pricing">登入</NavLinkBtn>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavigationBar>
  );
};
