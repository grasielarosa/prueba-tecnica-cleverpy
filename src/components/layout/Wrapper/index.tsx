import React, { FC, useEffect, useState } from "react";
import { getPosts } from "../../../api";

import { Post } from "../../parts/Post";
import { Sidebar } from "../Sidebar";
import { Container, Grid, Main } from "./styles";
import { Posts } from "../../../types";

const Wrapper = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response);
    });
  }, []);

  return (
    <Grid>
      <Sidebar />
      <Main>
        {posts.map((post) => (
          <Post
            key={post.id.toString()}
            name={post.name}
            body={post.body}
            userId={post.userId}
            role={post.role}
            title={post.title}
            id={post.id}
            setPosts={setPosts}
            posts={posts}
            avatar={post.avatar}
          />
        ))}
      </Main>
    </Grid>
  );
};

export { Wrapper };
