import React, { useCallback, useState, useEffect } from "react";
import PostService from "../../Services/PostServices";
import { useParams } from "react-router-dom";
import {
  StyledPost,
  PostTitle,
  PostContent,
  PostUser,
  StyledBar,
  StyledAnswer,
} from "../../Styles/styles";

const DetailsPage = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const GetPosts = useCallback(async () => {
    const post_data = await PostService.get_post_details(null, id);
    setPost(post_data.data);
  }, [id]);

  useEffect(() => {
    GetPosts();
  }, [GetPosts]);

  const post_details = post.map((element) => {
    return (
      <>
        <StyledPost key={element.id}>
          <PostTitle>{element.title}</PostTitle>
          {element.user_details.map((user) => {
            return (
              <PostUser
                key={user.id}
              >{`${user.username} <${user.email}>`}</PostUser>
            );
          })}
          <PostContent>{element.body}</PostContent>
        </StyledPost>
        {element.answers.map((comments) => {
          return (
            <>
              <StyledBar key={comments.id}>
                {comments.user_details.map((user) => {
                  return (
                    <>
                      <PostUser key={user.id}>
                        {`${user.username} <${user.email}>`} respondeu:
                        <br />
                        <StyledAnswer>{`${comments.body}`}</StyledAnswer>
                      </PostUser>
                    </>
                  );
                })}
              </StyledBar>
            </>
          );
        })}
      </>
    );
  });

  return <>{post_details}</>;
};
export default DetailsPage;
