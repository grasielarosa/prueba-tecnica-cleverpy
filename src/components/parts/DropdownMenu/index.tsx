import React, { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../../redux/slice.posts";
import { RootState } from "../../../redux/store";
import { Container, Button, Portal, Content, Item, Arrow } from "./styles";

interface Post {
  postId: string;
}

const DropdownMenu: FC<Post> = ({ postId }) => {
  const posts = useSelector((state: RootState) => state.render);
  const dispatch = useDispatch();
  const handleDeletePost = (postToDelete: string) => {
    const postsWithoutDeletedOne = posts?.filter((post) => {
      return post.id !== Number(postToDelete);
    });

    dispatch(addPosts(postsWithoutDeletedOne!));
  };

  return (
    <Container>
      <Button>
        <BsThreeDotsVertical aria-label="menu de opciones" />
      </Button>
      <Portal>
        <Content side="right">
          <Item onSelect={() => handleDeletePost(postId)}>
            ocultar publicación
          </Item>

          <Arrow />
        </Content>
      </Portal>
    </Container>
  );
};

export { DropdownMenu };
