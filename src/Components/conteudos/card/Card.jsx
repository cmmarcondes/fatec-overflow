import React, { useCallback, useEffect, useState } from 'react';
import { StyledCard } from '../../../Styles/styles';
import PostService from '../../../Services/service';

const Card = () => {
  const [post, setPost] = useState([]);
  const GetPosts = useCallback(async()=>{
    const post_data = await PostService.getPosts();
    setPost(post_data.data);
  },[])

  useEffect(()=>{
    GetPosts();
  }, [GetPosts]);

  const post_control = post.map((element)=>{
    return <StyledCard>{element.title}</StyledCard>
  })
  return (
      <>
      {post_control}
      </>
  );
}
export default Card;