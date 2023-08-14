import {Div, Input, Icon} from './style'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Search(){
    return(
        <Div>
            <Icon icon={faMagnifyingGlass}/>
            <Input placeholder="Digite algo...">
            </Input>
        </Div>
    )
}