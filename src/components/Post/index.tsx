import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import { Avatar } from "../Avatar";
import { Coments } from "../Coments";
import { Comments, GetPosts } from "../../types";

import {
  Container,
  Header,
  HeaderBox,
  UserBox,
  UserName,
  UserTitle,
  Time,
  ContentBox,
  ContentText,
  ComentForm,
  FormTitle,
  ComentInput,
  FormButton,
  ComentList,
} from "./styles";

interface Post extends GetPosts {
  name: string;
  role: string;
}
const Post: FC<Post> = ({ userId, id, title, body, name, role }) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [coments, setComents] = useState(["1", "2", "3"]);
  const [newComentText, setNewComentText] = useState("");
  const isNewCommentEmpty = newComentText.length === 0;

  const handleNewComment = (e: FormEvent) => {
    e.preventDefault();
    setComents([...coments, newComentText]);
    setNewComentText("");
  };

  const handleNewCommentChange = (teste: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComentText(teste.target.value);
  };

  const onDeleteComment = (id: string) => {
    const commentsWithoutDeletedOne = coments.filter((comment, i) => {
      return i !== Number(id);
    });

    setComents(commentsWithoutDeletedOne);
  };

  return (
    <Container id={String(id)}>
      <Header>
        <HeaderBox>
          <Avatar
            src="https://avatars.githubusercontent.com/u/80060167?v=4.jpeg"
            alt="eso puede ser el imagen de una persona"
          />
          <UserBox>
            <UserName>{name}</UserName>
            <UserTitle>{role} at Cleverpy</UserTitle>
          </UserBox>
        </HeaderBox>
        <Time title="27 de octubre" dateTime="2022-10-27 13:47:55">
          Publicado hace 2 días
        </Time>
      </Header>
      <ContentBox>
        <ContentText>{body}</ContentText>
      </ContentBox>
      <ComentForm
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      >
        <FormTitle>Deje su feedback</FormTitle>
        <ComentInput
          placeholder="deje su comentario"
          name="comment"
          value={newComentText}
          onChange={(e) => handleNewCommentChange(e)}
        />

        <FormButton
          onClick={(e) => handleNewComment(e)}
          disabled={isNewCommentEmpty}
          type="submit"
        >
          Comentar
        </FormButton>
      </ComentForm>
      <ComentList>
        {coments !== null &&
          coments.map((coment, i) => (
            <Coments
              key={i}
              content={coment.toString()}
              id={i.toString()}
              onDeleteComment={onDeleteComment}
              userId={userId}
              role={role}
            />
          ))}
      </ComentList>
    </Container>
  );
};

export { Post };
