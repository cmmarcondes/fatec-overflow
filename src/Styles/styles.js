import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: ${props => props.homepage ? '0' : '430px'};
  @media (max-width: 1024px){
      padding-left: 0;
  }
`;

export const Button = styled.button`
  background-color: #7c77b9;
  color: white;
  padding: 20px 30px;
  border: none;
  border-radius: 100px;
  font-weight: bolder;
  font-size: 30px;
  position: fixed;
  right: 40px;
  bottom: 40px;
  outline: none;
`;

/***************************************************************
                        STYLES OF POSTS/DETAILS
****************************************************************/

export const StyledPost = styled.div`
  width: 70%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px;
  background-color: white;
  box-shadow: 0px 1px 6px 1px gray;
  border-radius: 8px;
`;

export const PostTitle = styled.h2`
  font-size: ${(props) => (props.homepage ? "26px" : "36px")};
  color: black;
  font-weight: lighter;
  margin-bottom: 10px;
`;

export const PostContent = styled.h3`
  font-size: 20px;
  color: black;
  font-weight: lighter;
  margin-bottom: 20px;
`;

export const PostUser = styled.h4`
  font-size: 18px;
  color: gray;
  font-weight: lighter;
  font-style: italic;
  padding-left: ${props => props.comments ? '35px' : '15px'};
`;

export const StyledBar = styled(Link)`
text-decoration: none;
height: 100%;
width: 90%;
background-color: white;
font-size: 24px;
margin-left: auto;
margin-right: auto;
box-shadow:0px 20px 8px 0px lightgray;
border-bottom: 1px solid lightgray;
padding: 20px;
&:first-child{
  margin-top: 50px;
}
`;

export const StyledAnswer = styled.h2`
  font-size: 24px;
  color: black;
  font-weight: lighter;
  font-style:normal;
  padding-left: 20px;
`;

/***************************************************************
                        STYLES OF PROFILE
****************************************************************/

export const StyledContainer = styled.div`
  width: 70%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px;
  background-color: white;
  box-shadow: 0px 1px 6px 1px gray;
  border-radius: 8px;
`;


/***************************************************************
                        STYLES OF TEXTS
****************************************************************/

export const ProfileTextUsername = styled.h1`
text-align: center;
font-size: 30px;
color: #7c77b9;
letter-spacing: 3px;
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-weight: lighter;
`;

export const ProfileTextContent = styled.div`
display: flex;
flex-direction: column;
margin-top: 40px;
`;

export const ProfileText = styled.h1`
font-size: 24px;
margin: 10px;
letter-spacing: 3px;
font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
font-weight: lighter;
`;
