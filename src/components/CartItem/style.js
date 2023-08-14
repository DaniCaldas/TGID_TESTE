import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CartContainer = styled.div`
    background-color: #212529;
    width: 350px;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 7px;
    justify-content: space-evenly;
    gap: 30px;
`;
const Carts = styled.div`
    gap: 50px;
    display: flex;
    flex-direction: column;
`;
const Img = styled.img`
    width: 80px;
    border-radius: 7px;
`;
const Text = styled.h4`
    color: #fff;
`;
const Price = styled.p`
    color:#fff;
    font-weight: 600;
`;

const Button = styled.button`
    width: 40px;
    height: 40px;
    background-color: #E00000;
    border-radius: 7px;
    border: none;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: 200ms;

    &:hover{
        background-color: #B80000;
    }
`;

const Icon = styled(FontAwesomeIcon)`
    color: #fff;
`;

const Box = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

export{
    CartContainer,
    Text,
    Price,
    Img,
    Button,
    Carts,
    Box,
    Icon
}