import styled from "styled-components";

export const ModalStyled = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;

    .formModal{
        background-color: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 10px;
        gap: 20px;
        width: 88%;
        height: 370px;
        align-items: center;

     .closeModal{
        width: 96%;
        height: 35px;
        border-radius: 25px;
        border: solid 1px #272529;
        color: black;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
        background-color: #f28a80;
        }
        .submitBtn{ 
        height: 35px;
        border-radius: 25px;
        border: solid 1px #272529;
        color: black;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
        background-color: #0ff567;
        width: 96%;
        }
        input{
            width: 95%;
            height: 35px;
            border: solid 1px #272529;
            border-radius: 15px;
            color: black;
            font-family: "Roboto", sans-serif;
            font-weight: 600;
            font-style: normal;

        }

        p{
            color: black;
            font-family: "Roboto", sans-serif;
            font-weight: 500;
            font-style: normal;
        }
        

    }

    @media (min-width: 1024px) {
        .formModal{
        background-color: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
        gap: 20px;
        width: 25%;
        height: 370px;
    }
}

    @media (min-width: 1162px) {
        .formModal{
        background-color: #fff;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        padding: 0px;
        padding-top: 10px;
        padding-bottom: 10px;
        gap: 20px;
        width: 25%;
        height: 370px;
    }
    }

`