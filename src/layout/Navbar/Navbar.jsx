import { useState, useEffect } from "react";
import {Cards, Icon, Nav, Title, Text, CartPage, Ul, Li } from "./style";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import Search from "../../components/Search/Search";
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from "react";
import { ControlContext } from "../../Context/ControlProvider"

export default function Navbar(){

    const [open, setOpen] = useState(false)
    const { cartProducts } = useContext(ControlContext)

    const total = cartProducts.reduce((total, values) => total + values.valor, 0)

    return(
        <Nav>
            <Ul>
                <Li>
                    <Title>Shoes Shopping</Title>
                </Li>

                <Li>
                    <Search/>       
                </Li>

                <Li>
                    <Icon onClick={() => setOpen(!open)} size="xl" icon={faCartShopping}/>
                </Li>   

            </Ul>
            <CartPage open={open}>
                <Title>Seu Carrinho</Title>
                <Cards>
                {   cartProducts == 0 ?<Text>Carrinho vazio</Text> :
                    cartProducts.map((cartProduct)=>(
                        <CartItem img={cartProduct.url} price={cartProduct.valor} name={cartProduct.produto} id={cartProduct.id}/>
                        ))
                    }
                </Cards>
                <Text>Total ${total}</Text>
            </CartPage>
        </Nav>
    )
}