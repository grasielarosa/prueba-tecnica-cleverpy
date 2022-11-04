import { FC, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Container, Button, Portal, Content, Item, Arrow } from "./styles";

interface Post {
  postId: string;
  onDeletePost: (postId: string) => void;
}

const DropdownMenu: FC<Post> = ({ postId, onDeletePost }) => {
  function handleDeleteComment() {
    onDeletePost(postId);
  }
  return (
    <Container>
      <Button>
        <BsThreeDotsVertical aria-label="menu de opciones" />
      </Button>
      <Portal>
        <Content side="right">
          <Item onSelect={() => onDeletePost(postId)}>ocultar publicación</Item>
          <Arrow />
        </Content>
      </Portal>
    </Container>
  );
};

export { DropdownMenu };
