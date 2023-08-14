import styled from "styled-components"

const Div = styled.div`
    margin-top: 20px;
    align-items: center;
    display: flex;
    justify-content: center;
    `;
const Cards = styled.div`
    width: 100%;
    justify-content: center;
    display: grid;
    grid-template-columns:auto auto auto;
    row-gap: 100px;
    column-gap: 50px;
`;

export{
    Div,
    Cards
}