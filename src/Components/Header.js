import React from "react";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  padding: 50px;
  @media only screen and (max-width: 800px) {
    height: 30px;
    padding: 30px;
  }
`;
const SLink = styled.a`
  height: 20px;
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e9e9eb;
  @media only screen and (max-width: 800px) {
    font-size: 1em;
  }
`;

export default () => (
  <Header>
    <SLink>JONGHYEON.DEV</SLink>
  </Header>
);
