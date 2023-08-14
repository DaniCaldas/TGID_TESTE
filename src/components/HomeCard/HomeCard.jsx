import {Img, Box, Button, CardContainer, ImgBase, Price, Title } from "./style";
import { useContext } from "react";
import { ControlContext } from "../../Context/ControlProvider"

export default function HomeCard({img, title, price, id}){
    
    const { Comprar } = useContext(ControlContext)

    return(
        <CardContainer id={id}>
            <ImgBase>
            <Img src={img}/>
            </ImgBase>
            <Title>{title}</Title>

            <Box>
                <Price>${price}</Price>
                <Button onClick={() => Comprar(img, title, price)}>add cart</Button>
            </Box>
        </CardContainer>
    )
}