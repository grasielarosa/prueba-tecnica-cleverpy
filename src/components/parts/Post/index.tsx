import React, { FC, useState, FormEvent, ChangeEvent } from "react";
import { Avatar } from "../Avatar";
import { Comments } from "../Comments";
import { Comments as CommentsType, Posts } from "../../../types";

import {
  Container,
  Header,
  HeaderBox,
  UserBox,
  UserName,
  UserTitle,
  Time,
  ContentBox,
  ContentTitle,
  ContentText,
  CommentForm,
  FormTitle,
  CommentInput,
  FormButton,
  CommentList,
} from "./styles";
import { DropdownMenu } from "../DropdownMenu";

const Post: FC<Posts> = ({
  userId,
  id,
  avatar,
  title,
  body,
  name,
  role,
  setPosts,
  posts,
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const [comments, setComments] = useState(["1"]);
  const [newCommentText, setNewCommentText] = useState("");
  const isNewCommentEmpty = newCommentText.length === 0;

  const handleNewComment = (e: FormEvent) => {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (teste: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(teste.target.value);
  };

  const onDeleteComment = (id: string) => {
    const commentsWithoutDeletedOne = comments!.filter((comment, i) => {
      return i !== Number(id);
    });

    setComments(commentsWithoutDeletedOne);
  };

  const deletePost = (postToDelete: string) => {
    const postsWithoutDeletedOne = posts?.filter((post) => {
      return post.id !== Number(postToDelete);
    });

    setPosts!(postsWithoutDeletedOne!);
  };

  return (
    <Container id={String(id)}>
      <Header>
        <HeaderBox>
          <Avatar src={avatar} alt="eso puede ser el imagen de una persona" />
          <UserBox>
            <UserName>{name}</UserName>
            <UserTitle>{role} at Cleverpy</UserTitle>
          </UserBox>
        </HeaderBox>

        <Time title="27 de octubre" dateTime="2022-10-27 13:47:55">
          Publicado hace 2 días
        </Time>
        <DropdownMenu postId={String(id)} onDeletePost={deletePost} />
      </Header>
      <ContentBox>
        <ContentTitle>{title}</ContentTitle>
        <ContentText>{body}</ContentText>
      </ContentBox>
      <CommentForm
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      >
        <FormTitle>Deje su feedback</FormTitle>
        <CommentInput
          placeholder="deje su comentario"
          name="comment"
          value={newCommentText}
          onChange={(e) => handleNewCommentChange(e)}
        />

        <FormButton
          onClick={(e) => handleNewComment(e)}
          disabled={isNewCommentEmpty}
          type="submit"
        >
          Comentar
        </FormButton>
      </CommentForm>
      <CommentList>
        {comments !== undefined &&
          comments.map((comment, i) => (
            <Comments
              key={i}
              content={comment.toString()}
              id={i.toString()}
              onDeleteComment={onDeleteComment}
              userId={userId}
              role={role}
            />
          ))}
      </CommentList>
    </Container>
  );
};

export { Post };
