import HomeCard from "../../components/HomeCard/HomeCard"
import {Cards, Div } from "./style"
import { useContext } from "react"
import { ControlContext } from "../../Context/ControlProvider"


export default function Home(){

    const { product } = useContext(ControlContext)

    return(

        <Div>
            <Cards>
            {
                product.map((produc) => (
                    <HomeCard id={produc.id} price={produc.value}  img={produc.image} title={produc.name}/>
                    ))
            }
            </Cards>
        </Div>
    )
}