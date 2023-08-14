import {Box, Icon, Button, CartContainer, Img, Price, Text } from "./style"
import { useContext } from "react"
import { ControlContext } from "../../Context/ControlProvider"
import {faTrashAlt} from "@fortawesome/free-regular-svg-icons"

export default function CartItem({img, name, price, id}){
    
    const { Remover } = useContext(ControlContext)

    return(
            <CartContainer id={id}>            
            <Img src={img}/>
            <Box>
                <Text>{name}</Text>
                <Price>${price}</Price>
            </Box>
            <Button onClick={() => Remover(id)}>
                <Icon size="lg" icon={faTrashAlt}/>
            </Button>
            </CartContainer>
    )
}