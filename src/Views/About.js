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
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  border: 3px solid #e9e9eb;
  width: 250px;
  margin-top: 3em;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  font-weight: 500;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 50vh;
`;
const BigText = styled.span`
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 0.4em;
`;
const MText = styled.span`
  font-weight: 500;
  font-size: 2em;
  margin: 0.1em;
`;
const Home = () => (
  <Page>
    <Section>
      <TextArea>
        <BigText>Hello, guys</BigText>
        <MText>I am JONGHYEON BYUN</MText>
        <Button></Button>
      </TextArea>
    </Section>{" "}
    <Image src={Man}></Image>
  </Page>
);

export default Home;
