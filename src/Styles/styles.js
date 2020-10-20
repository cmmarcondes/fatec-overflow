import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-wrap: wrap;
`;

export const Button = styled.button`
background-color: #7C77B9;
color: white;
padding:20px 30px;
border: none;
border-radius: 100px;
font-weight: bolder;
font-size: 30px;
position: fixed;
right: 40px;
bottom: 40px;
outline: none;
`;

export const Header = styled.div`
padding: 20px;
background-color: #7C77B9;
font-size: 30px;
color: white;
font-family: sans-serif;
`;

export const StyledMenu = styled.div`
padding: 20px;
width: 200px;
background-color: black;
`;

export const StyledCard = styled.div`
width: 200px;
height: 250px;
margin: 20px;
padding: 20px;
background-color: white;
box-shadow: 0px 2px 8px 1px gray;
border-radius: 8px;
`;