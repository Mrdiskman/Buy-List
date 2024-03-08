import styled from "styled-components";

export const ListStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
    min-height: 400px;
    height: fit-content;
    border-radius: 15px;

    .excludeContainer{
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .excludeBtn{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: none;
        background-color: #ffffff;
        font-weight: bold;
    }
    
    .Titlecontainer{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
    }

    .boxList{
        padding-top: 5px;
        background-color: #3f3e40;
        height: 400px;
        border-radius: 15px;
        width: 100%;
        display: block;
        margin: 0 auto;
        text-align: center;
        overflow: auto;
    }

    .boxList li {
        display: inline-block;
    }

    .items{
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        background-color: #000000;
        width: 99%;
        height: 60px;
        border-radius: 15px;
        justify-content: center;
        align-items: center;
        p{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .info{
        padding-right: 2%;
        gap: 1px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        font-size: 14px;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
        color: #ffffff;
        justify-content: space-around;
        align-items: center;
    }

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        width: 50%;
        min-height: 400px;
        height: fit-content;
        border-radius: 15px;
    }
`