import React from "react";

import { Container, CleverpyLogo, Title } from "./styles";
import logo from "../../../assets/images/cleverpy-logo.jpeg";
const Header = () => {
  return (
    <Container>
      <CleverpyLogo src={logo} alt="Cleverpy Posts" />
      <Title>Posts</Title>
    </Container>
  );
};

export { Header };
