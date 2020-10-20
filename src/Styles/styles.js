import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: auto;
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
display: flex;
flex-direction: column;
position: fixed;
height: 100%;
width: 400px;
background-color: #7C77B9;
`;

export const TopSection = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: white;
padding: 15px;
margin-bottom: 20px;
`;

export const MiddleSection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 20px;
margin-left: 20px;
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

export const MenuText = styled.h1`
color: ${props => props.MiddleSection ? 'white' : '#7C77B9'};
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
text-align: center;
letter-spacing: 3px;
margin-top: ${props => props.MiddleSection ? '50px' : 'none'};
font-size: 30px;
font-weight: ${props => props.MiddleSection ? 'lighter' : 'none'}
`;