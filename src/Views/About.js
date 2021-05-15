import Header from "Components/Header";
import styled from "styled-components";
import Obj1 from "assets/obj1.png";
import Obj2 from "assets/obj2.png";
import Obj3 from "assets/obj3.png";
import Obj4 from "assets/obj4.png";
import StandingMan from "assets/standingman.png";

const AboutPage = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
`;

const Obj = styled.img`
  height: 120px;
  position: absolute;
  animation-duration: 3s;
  animation-name: moveobj;
  animation-iteration-count: infinite;
  background-color: transparent;
  animation-direction: alternate;
  @keyframes moveobj {
    0% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(1, 0, 0.8, 1);
    }

    100% {
      transform: translateY(15px);
    }
  }

  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
  right: ${(props) => props.right}px;
  left: ${(props) => props.left}px;

  @media only screen and (max-width: 800px) {
    height: 80px;
  }
`;
const Content = styled.div`
  padding: 1.2em;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  @media only screen and (max-width: 800px) {
    width: 60%;
  }
`;
const Man = styled.img`
  z-index: 10;
  height: 50vh;
  background-color: transparent;
  @media only screen and (max-width: 800px) {
    position: absolute;
    top: 25vh;
    left: 30vw;
  }
`;
const BigText = styled.span`
  font-weight: 700;
  font-size: 3em;
  background-color: transparent;
  margin-bottom: 0.2em;
  @media only screen and (max-width: 800px) {
    font-size: 2em;
    margin-bottom: 0.2em;
  }
`;
const MText = styled.span`
  font-weight: 500;
  background-color: transparent;
  font-size: 2em;
  margin-bottom: 1em;
  font-family: Roboto;
  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
    margin-bottom: 0.2em;
  }
`;

const LText = styled.span`
  background-color: transparent;
  font-weight: 300;
  font-size: 1.5em;
  margin: 0.2em;
  font-family: Roboto;
  @media only screen and (max-width: 800px) {
    font-size: 1em;
    margin-bottom: 0.2em;
  }
`;

const About = () => (
  <div className="section">
    <Header />
    <AboutPage>
      <Obj src={Obj1} top={200} left={100} />
      <Obj src={Obj2} bottom={100} left={50} />
      <Obj src={Obj3} bottom={100} right={100} />
      <Obj src={Obj4} top={100} right={100} />
      <Content>
        <BigText>Developer</BigText>
        <MText>JONGHYEON BYUN</MText>
        <LText>
          🔭 I’m currently studying on Korea Digital Media HighSchool
        </LText>
        <LText>🌱 I’m currently learning Flutter, Math ,React</LText>
        <LText>📫 How to reach me: Instagram DM</LText>
        <LText>
          ⚡ interested in : Coffee, Coding, Mathematics, artificial
          intelligence, 3D
        </LText>
      </Content>
      <Man src={StandingMan}></Man>
    </AboutPage>
  </div>
);

export default About;
