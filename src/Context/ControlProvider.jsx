import { createContext, useEffect, useState } from "react";
import axios from "axios"

    export const ControlContext = createContext();

const api = "http://localhost:3000"

export const ControlProvider = ({children}) => {

    const [product, setProduct] = useState([])
    const [cartProducts, setCartProducts] = useState([])
    
    const Comprar = (url, produto, valor) =>{
        axios.post(api + "/carrinho", {
            url,
            produto,
            valor
        })
        .then(() => console.log("item adicionado ao carrinho"))
        .catch(() => console.log("vish deu erro!"))
    }

    const Remover = (id) => {
        axios.delete(api + `/carrinho/${id}`)
        .then(() => console.log("Produto apagado!"))
        .catch(() => console.log("vish deu erro!"))
    }

    
    useEffect(() => {
        axios.get(api + "/carrinho")
        .then((response) => setCartProducts(response.data))
        .catch(() => console.log("vish deu erro!"))
    },[Comprar, Remover])


    useEffect(() => {
        axios.get(api + "/produtos")
        .then((response) => setProduct(response.data))
        .catch((err) => console.log(err))
    },[])


    return(
        <ControlContext.Provider value={{product, cartProducts, Remover, Comprar}}>
            {children}
        </ControlContext.Provider>
    )
}