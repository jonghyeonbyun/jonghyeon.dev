import styled from "styled-components";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
const FooterSec = styled.div`
  height: 100px;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: #0b0d17;
  @media only screen and (max-width: 800px) {
    height: 60px;
  }
`;

const CopyRightSec = styled.span`
  background-color: inherit;
  @media only screen and (max-width: 800px) {
    font-size: 0.6em;
  }
`;
const LinkSec = styled.div`
  display: flex;
  background-color: #0b0d17;
`;
const Link = styled.a`
  height: 24px;
  margin-right: 24px;
  background-color: #0b0d17;
  @media only screen and (max-width: 800px) {
    margin-right: 18px;
  }
`;
const InstaIcon = styled(Instagram)`
  height: 25px;
  background-color: #0b0d17;
  color: #e9e9eb;
  @media only screen and (max-width: 800px) {
    height: 18px;
  }
`;
const GithubIcon = styled(Github)`
  height: 25px;
  background-color: #0b0d17;
  color: #e9e9eb;
  @media only screen and (max-width: 800px) {
    height: 18px;
  }
`;
const FacebookIcon = styled(FacebookCircle)`
  height: 25px;
  background-color: #0b0d17;
  color: #e9e9eb;
  @media only screen and (max-width: 800px) {
    height: 18px;
  }
`;
const YoutubeIcon = styled(Youtube)`
  height: 25px;
  background-color: #0b0d17;
  color: #e9e9eb;
  @media only screen and (max-width: 800px) {
    height: 18px;
  }
`;
const Footer = () => (
  <div className="section fp-auto-height">
    <FooterSec>
      <CopyRightSec>© 2021 JonghyeonByun. All rights reserved</CopyRightSec>
      <LinkSec>
        <Link href="https://www.instagram.com/jong_hyeon_b/">
          <InstaIcon />
        </Link>
        <Link href="https://github.com/jonghyeonbyun">
          {" "}
          <GithubIcon />
        </Link>{" "}
        <Link href="https://www.facebook.com/profile.php?id=100015897300874">
          <FacebookIcon />
        </Link>{" "}
        <Link href="https://www.youtube.com/channel/UCzuXlK6mn3I77jbyZpi69wA">
          <YoutubeIcon />
        </Link>
      </LinkSec>
    </FooterSec>
  </div>
);

export default Footer;
