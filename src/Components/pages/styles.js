import styled from 'styled-components';

export const Container = styled.div`
.home-section {
    display: flex;
    align-items: center;
    flex-direction: column;

    background-color: #613DC1;
    box-shadow: 0px 1px 8px 2px grey;

    color: white;
    font-size: 30px;
    font-family: sans-serif;

    position: absolute;
    height: 100vh;
    width: 100%;

    &__menu {
        display: flex;
        justify-content: space-around;
        align-items: center;


        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 3px 6px #00000029;

        width: 80%;
        height: 100px;

        margin: 50px 0;
        z-index: 99;

    }

    &__wrap {
        display: flex;
        justify-content: space-around;
        align-items: center;

        position: absolute;
        bottom: -20px;

        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 3px 6px #00000029;

        width: 60%;
        height: 100px;

        z-index: 99;

    }

    &__logo {
        margin: 0 20px;
        align-self: flex-start;
        font-size: 180px;
        font-weight: bolder;
        -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #ded604;
    -webkit-text-fill-color: #613DC1;
    letter-spacing: 10px;
       }

    &__welcome {
        align-self: flex-start;
        margin: 100px 0 0 100px;
        padding: 20px;
        border-left: 50px solid #ded604;
        h4 {
            font-size: 45px;
            font-weight: bold;
        }

        h5 {
            font-weight: lighter;
        }
    }

    &__image {
        position: absolute;
        right: 40px;
        top: -25px;

        img {
            width: 600px;
        }
    }
}

.links {
    color: #303033;
    font-size: 24px;
    font-weight: 600;

    margin: 0 30px;

    cursor: pointer;

    &:hover {
        color: #613DC1;

        transition: 0.3s ease-in-out;
    }
}
`;