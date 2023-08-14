import styled from "styled-components"

const CardContainer = styled.div`
    width: 350px;
    height: 450px;
    border-radius: 7px;
    background-color: #232323;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const ImgBase = styled.div`
    border-radius: 7px;
    background-color: #fff;
    width: 300px;
    height: 250px;
`;
const Img = styled.img`
    width: 300px;
`;

const Price = styled.p`
    color: #fff;
    font-weight: 600;
    font-size: 20px;
`;

const Title = styled.h2`
    color: #232323;
`;

const Button = styled.button`
    width: 150px;
    height: 40px;
    background-color: #3aa856;
    border-radius: 7px;
    border: none;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: 200ms;
    &:hover{
        background-color: #2F8945;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
`;

export{
    CardContainer,
    ImgBase,
    Price,
    Button,
    Title,
    Box,
    Img
}