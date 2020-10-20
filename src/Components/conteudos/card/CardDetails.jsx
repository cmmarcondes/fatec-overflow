import React, {useCallback, useState, useEffect} from 'react';
import PostService from '../../../Services/service';
import { useParams } from 'react-router-dom';
import { StyledPost, PostTitle, PostContent, PostUser } from '../../../Styles/styles';

const CardDetails = () => {
    const [post, setPost] = useState([]);
    const { id } = useParams();
    const GetPosts = useCallback(async()=>{
        const post_data = await PostService.getPosts();
        setPost(post_data.data);
      },[])
    
      useEffect(()=>{
        GetPosts();
      }, [GetPosts]);

      const post_details = post.map((element)=>{
         return element.id === Number(id) ? 
        <StyledPost>
            <PostTitle>{element.title}</PostTitle>
            <PostUser>{`Fulano <cicrano@fatec.sp.gov.br>`}</PostUser>
            <PostContent>{element.body}</PostContent>
        </StyledPost>
         
         : false;
      })
    return(
        <>
        {post_details}
        </>
    );
}
export default CardDetails;