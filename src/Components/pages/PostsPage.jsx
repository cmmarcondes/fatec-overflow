import React, { useCallback, useEffect, useState } from 'react';
import { PostTitle, PostUser, StyledCard } from '../../Styles/styles';
import PostService from '../../Services/service';

const Posts = () => {
  const [post, setPost] = useState([]);

  const GetPosts = useCallback(async()=>{
    const post_data = await PostService.getPosts();
    setPost(post_data.data);
  },[])

  useEffect(()=>{
    GetPosts();
  }, [GetPosts]);
  
  const post_control = post.map((element)=>{
    return <StyledCard key={element.id} to={{pathname: `/posts/${element.id}`}}>
      <PostTitle homepage>{element.title}</PostTitle>
      {element.user_details.map((user)=>{
        return <PostUser key={user.id}>{`${user.username} <${user.email}>`}</PostUser>
      })}
      
    </StyledCard>
  })
  return (
      <>
      {post_control}
      </>
  );
}
export default Posts;