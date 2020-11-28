/***************************************************************
                        STYLES OF MENU
****************************************************************/
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 400px;
  background-color: white;
  border-right: 0.2px solid lightgrey;
  @media (max-width: 1024px){
      display: none;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
`;

export const MiddleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

export const MenuText = styled(Link)`
  ${(props) =>
    props.middle
      ? {
          transition: ".3s ease-in",
        }
      : false};
  text-decoration: none;
  display: flex;
  background-color: white;
  color: #7c77b9;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.middle ? "70px" : "50px")};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 3px;
  margin-top: ${(props) => (props.middle ? "30px" : "none")};
  font-size: 30px;
  font-weight: ${(props) => (props.middle ? "lighter" : "none")};
  &:hover {
    ${(props) =>
      props.middle
        ? {
            transition: "0.3s ease-in",
            backgroundColor: "#7c77b9",
            color: "white",
          }
        : false}
  }
`;