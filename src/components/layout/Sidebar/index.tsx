import React, { FC } from "react";
import { Avatar } from "../../parts/Avatar";
import {
  Aside,
  CoverImage,
  ProfileContainer,
  UserName,
  Title,
  Footer,
  Icon,
  Button,
} from "./styles";

const Sidebar: FC = () => {
  return (
    <Aside>
      <CoverImage src="https://images.unsplash.com/photo-1579772330569-945775ca97ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmslMjBibHVlJTIwc2t5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=40" />
      <ProfileContainer>
        <Avatar
          src="https://avatars.githubusercontent.com/u/80060167?v=4.jpeg"
          alt="eso puede ser el imagen de una persona"
        />
        <UserName>Grasiela Rosa</UserName>
        <Title>Developer</Title>
      </ProfileContainer>
      <Footer>
        <Button
          onClick={() => alert("ups! esa funcionalidade no fue implementada.")}
        >
          <Icon />
          Edite su perfil
        </Button>
      </Footer>
    </Aside>
  );
};

export { Sidebar };
