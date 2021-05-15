import React from "react";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 50px;
  @media only screen and (max-width: 800px) {
    padding: 0;
    margin-left: 0;
    height: 70px;
    justify-content: center;
    align-items: center;
  }
`;
const SLink = styled.a`
  height: 20px;
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #e9e9eb;
  @media only screen and (max-width: 800px) {
    font-size: 1em;
  }
`;

export default () => (
  <Header>
    <SLink href="#home">JONGHYEON.DEV</SLink>
  </Header>
);
