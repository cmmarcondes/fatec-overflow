import React, { useCallback, useEffect, useState } from "react";
import {
  PostTitle,
  PostUser,
  StyledBar,
  StyledCard,
} from "../../Styles/styles";
import PostService from "../../Services/PostServices";

const Posts = () => {
  const [post, setPost] = useState([]);

  const GetPosts = useCallback(async () => {
    const post_data = await PostService.getPosts();
    setPost(post_data.data);
  }, []);

  useEffect(() => {
    GetPosts();
  }, [GetPosts]);

  const post_control = post.map((element) => {
    return (
      <StyledBar key={element.id} to={{ pathname: `/posts/${element.id}` }}>
        <PostTitle homepage>{element.title}</PostTitle>
        {element.user_details.map((user) => {
          return (
            <>
            <PostUser key={user.id}>
              Criado por: {`${user.username} <${user.email}>`} em:{" "}
              {element.createdAt.slice(8, 10)}/{element.createdAt.slice(5, 7)}/
              {element.createdAt.slice(0, 4)}
            </PostUser>            
            </>
          );
        })}
        <PostUser comments>
            Esse post tem {element.answers.length} comentários.
            </PostUser>
      </StyledBar>
    );
  });
  return <>{post_control}</>;
};
export default Posts;
