import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 430px;
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

export const Header = styled.div`
  padding: 20px;
  background-color: #7c77b9;
  font-size: 30px;
  color: white;
  font-family: sans-serif;
  box-shadow: 0px 1px 8px 2px grey;
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 400px;
  background-color: white;
  border-right: 0.2px solid lightgrey;
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
  ${(props) =>
    props.MiddleSection
      ? {
          transition: ".3s ease-in",
        }
      : false};
  display: flex;
  background-color: white;
  color: #7c77b9;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${(props) => (props.MiddleSection ? "70px" : "50px")};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 3px;
  margin-top: ${(props) => (props.MiddleSection ? "30px" : "none")};
  font-size: 30px;
  font-weight: ${(props) => (props.MiddleSection ? "lighter" : "none")};
  &:hover {
    ${(props) =>
      props.MiddleSection
        ? {
            transition: "0.3s ease-in",
            backgroundColor: "#7c77b9",
            color: "white",
          }
        : false}
  }
`;
