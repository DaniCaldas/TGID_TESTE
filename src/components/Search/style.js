import styled from "styled-components"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const Div = styled.div`
    background-color: #fff;
    height: 20px;
    min-width: 180px;
    //width: 180px ;
    padding: 5px 9px 5px 9px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 3px solid #e8e8e8;
`;

const Input = styled.input`
    background: transparent;
    border: none;
    height: 30px;
    font-size: 16px;
    cursor: pointer;
    padding-left:9px;
    color:#000000 ;
    text-align: start;
    align-items: center;
    &:focus{
        outline: none;
    }
    
`;

const Icon = styled(FontAwesomeIcon)`
    color: #323232;
`;

export{
    Div,
    Input,
    Icon
}