import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Nav = styled.nav`
    display: flex;
    position: sticky;
    top: 0;
    width: 100%;
    height: 15vh;
    background-color: #202020;
    justify-content: center;
    flex-direction: row;
`;

const Ul = styled.ul`
    flex-direction: row;
    justify-content: space-around;
    column-gap: 150px;
    display: flex;
    align-items: center;
    list-style: none;
`;

const Li = styled.li`
    cursor: pointer;
    z-index: 100;
`;

const Icon = styled(FontAwesomeIcon)`
    z-index: 100;
    color: #fff;
    transition: 100ms;

    &:hover{
        color: #EBEBEB;
    }
`;

const Title = styled.h1`
    color: #fff;
`;
const Text = styled.h3`
    color: #fff;
`;

const CartPage = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    position: absolute;
    top: -10px;
    right: 0;
    height: 100vh;
    width: 25em;
    padding-top: 9rem;
    background-color: #202020;
    transition:  300ms;
    transform: ${({open}) =>  (open ? 'translateX(0)' : 'translateX(100%)')};
`;

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 97%;
    overflow-y: scroll;
    height: 60vh;
    gap: 30px;

`;

export{
    Nav,
    Icon,
    Title,
    CartPage,
    Ul,
    Li,
    Cards,
    Text
}