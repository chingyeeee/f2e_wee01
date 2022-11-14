import { Container } from "react-bootstrap";
import { H1, H4, P1, P3 } from "../common/typography";
import { Section } from "../layouts/Section";
import styled from "styled-components";
import { colors } from "../common/colors";
import { shadow } from "../common/shadow";
import Thunder from "../../assets/company/icon-thunder.svg";
import { Image, ImageWrapper } from "../layouts/Image";

const CompanySec = styled(Section)`
  padding: 10vh 0;
  box-sizing: border-box;
  text-align: center;
`;

const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 100%;
`;

const Title = styled(H1)`
  color: ${colors.g1};
  padding: 1rem 2rem;
  border: 3px solid ${colors.g1};
  display: inline-block;
  border-radius: 100px;
  text-shadow: ${shadow.greenShadow};
  box-shadow: ${shadow.greenShadow};
  position: relative;
`;

const DecoThunder = styled(ImageWrapper)`
  position: absolute;
  top: -50px;
  right: -90px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;
`;

const Card = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 24px; */
  background-color: ${colors.white};
  width: 30%;
  padding: 24px 0;
  border-radius: 16px;
`;

const CardTag = styled(P3)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${colors.g1};
  border-radius: 10px;
`;

const CardTitle = styled(H4)`
  color: ${colors.p3};
`;

export const Company = () => {
  return (
    <CompanySec>
      <Content>
        <div>
          <Title bold>
            年度最強合作 三大主題來襲
            <DecoThunder>
              <Image src={Thunder} />
            </DecoThunder>
          </Title>
        </div>

        <P1 medium white>
          各路廠商強強聯手
          <br />
          共同設計出接地氣的網頁互動挑戰關卡
        </P1>

        <CardContainer>
          <Card>
            <CardTag medium># 板塊設計</CardTag>
            <CardTitle bold>The F2E 活動網站設計</CardTitle>
          </Card>
        </CardContainer>
      </Content>
    </CompanySec>
  );
};
