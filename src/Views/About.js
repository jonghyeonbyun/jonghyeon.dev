import Header from "Components/Header";
import styled from "styled-components";
import Man from "assets/man.png";
const Section = styled.section``;

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
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
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

const Image = styled.img`
  height: 50vh;
  @media only screen and (max-width: 800px) {
    height: 250px;
    max-height: 80vw;
    margin-bottom: 2.5rem;
  }
`;
const BigText = styled.span`
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 0.4em;
  @media only screen and (max-width: 800px) {
    font-size: 2.5em;
    margin-bottom: 0.2em;
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
const Link = styled.a`
  text-decoration: inherit;
  color: inherit;
`;
const Home = () => (
  <div className="section">
    <Header />
    <Page>
      <Section>
        <TextArea>
          <BigText>Hello, guys</BigText>
          <MText>I am JongHyeon Byun</MText>
          <Link href="#about">
            <Button>Who Are You?</Button>
          </Link>
        </TextArea>
      </Section>
      <Image src={Man}></Image>
    </Page>
  </div>
);

export default Home;
