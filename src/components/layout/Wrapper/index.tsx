import React, { FC, useEffect, useState } from "react";
import { getPosts } from "../../../api";

import { Post } from "../../parts/Post";
import { Sidebar } from "../Sidebar";
import { Container, Grid, Main } from "./styles";
import { Posts } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { usePosts, renderPosts } from "../../../redux/slice.posts";

const Wrapper = () => {
  // const [posts, setPosts] = useState<Posts[]>([]);
  const posts = useSelector(usePosts);
  console.log(posts, "XxXXXxxx");
  const dispatch = useDispatch();
  useEffect(() => {
    getPosts().then((response) => {
      dispatch(renderPosts(response));
    });
  }, []);

  return (
    <Grid>
      <Sidebar />
      <Main>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post
              key={post.id.toString()}
              name={post.name}
              body={post.body}
              userId={post.userId}
              role={post.role}
              title={post.title}
              id={post.id}
              // setPosts={setPosts}
              posts={posts}
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
