import styled from "styled-components";
import Typical from "react-typical";

const Sec = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MText = styled.span`
  font-weight: 900;
  font-size: 2em;
  margin-bottom: 0.2em;
  font-family: Roboto;
  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
    margin-bottom: 0.2em;
  }
`;
const Landing = () => (
  <Sec>
    {" "}
    <Typical steps={["WELLCOME 👋", 1000]} loop={1} wrapper={MText} />
  </Sec>
);

export default Landing;
