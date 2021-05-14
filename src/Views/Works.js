import Header from "Components/Header";
import styled from "styled-components";
import Footer from "Components/Footer";

const Page = styled.div`
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

const MText = styled.span`
  font-weight: 500;
  font-size: 2em;
  margin-bottom: 0.2em;
  font-family: Roboto;
  @media only screen and (max-width: 800px) {
    font-size: 1.5em;
    margin-bottom: 0.2em;
  }
`;
const Button = styled.div`
  border: 3px solid #e9e9eb;
  width: 250px;
  margin-top: 2em;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    font-size: 1em;
    margin-top: 1em;
    width: 180px;
    height: 40px;
  }
`;
const Link = styled.a`
  text-decoration: inherit;
  color: inherit;
`;
const Works = () => (
  <div className="section">
    <Header />
    <Page>
      <Link href="https://github.com/jonghyeonbyun">
        <Button>WORKS</Button>
      </Link>
    </Page>{" "}
  </div>
);

export default Works;
