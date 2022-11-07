import React, { FC, useEffect, useState } from "react";
import { getPosts } from "../../../api";

import { Post } from "../../parts/Post";
import { Sidebar } from "../Sidebar";
import { Container, Grid, Main } from "./styles";
import { Posts } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../../redux/slice.posts";
import { RootState } from "../../../redux/store";

const Wrapper = () => {
  // const [posts, setPosts] = useState<Posts[]>([]);
  const posts = useSelector((state: RootState) => state.render);
  const dispatch = useDispatch();
  useEffect(() => {
    getPosts().then((response) => dispatch(addPosts(response)));
  }, []);

  return (
    <Grid>
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
    </Grid>
  );
};

export { Wrapper };
