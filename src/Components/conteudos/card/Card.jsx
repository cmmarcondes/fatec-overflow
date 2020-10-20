import React, { useCallback, useEffect, useState } from 'react';
import { PostContent, PostTitle, PostUser, StyledCard } from '../../../Styles/styles';
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
    return <StyledCard key={element.id} to={{pathname: `/posts/${element.id}`}}>
      <PostTitle homepage>{element.title.slice(0, 80)}</PostTitle>
      <PostUser>{`Fulano <cicrano@fatec.sp.gov.br>`}</PostUser>
    </StyledCard>
  })
  return (
      <>
      {post_control}
      </>
  );
}
export default Card;