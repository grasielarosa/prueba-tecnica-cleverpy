import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../redux/slice.posts";
import { RootState } from "../../redux/store";
import { getPosts } from "../../api";

import { Post, Sidebar, Wrapper, Header } from "../../components";

import { Main } from "./styles";

const Dashboard = () => {
  const posts = useSelector((state: RootState) => state.render);
  const dispatch = useDispatch();
  useEffect(() => {
    getPosts().then((response) => dispatch(addPosts(response)));
  }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <>
          <Sidebar />
          <Main>
            {posts ? (
              posts.map((post) => (
                <Post
                  key={post.id.toString()}
                  name={post.name}
                  body={post.body}
                  userId={post.userId}
                  role={post.role}
                  title={post.title}
                  id={post.id}
                  avatar={post.avatar}
                />
              ))
            ) : (
              <h1>waiting</h1>
            )}
          </Main>
        </>
      </Wrapper>
    </>
  );
};

export { Dashboard };
