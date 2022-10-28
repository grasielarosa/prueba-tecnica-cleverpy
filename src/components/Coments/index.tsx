import React, { FC } from "react";
import { Avatar } from "../Avatar";
import { Comments } from "../../types";
import {
  Container,
  ComentBox,
  ComentContent,
  UserBox,
  InfoBox,
  UserName,
  Time,
  DeleteButton,
  Message,
  Icon,
} from "./styles";

const Coments: FC<Comments> = ({
  content,
  userId,
  role,
  id,
  onDeleteComment,
}) => {
  const handleDeleteComment = (id: string) => {
    console.log(id);
    onDeleteComment(id);
  };

  return (
    <Container>
      <Avatar
        src="https://avatars.githubusercontent.com/u/80060167?v=4.jpeg"
        alt="eso puede ser el imagen de una persona"
      />

      <ComentBox>
        <ComentContent>
          <UserBox>
            <InfoBox>
              <UserName>Grasiela Rosa</UserName>
              <Time title="27 de octubre" dateTime="2022-10-27 13:47:55">
                Publicado hace 2 días
              </Time>
            </InfoBox>
            <DeleteButton
              onClick={() => handleDeleteComment(id.toString())}
              title="Borrar Comentario"
            >
              <Icon />
            </DeleteButton>
          </UserBox>
          <Message>{content}</Message>
        </ComentContent>
      </ComentBox>
    </Container>
  );
};

export { Coments };
