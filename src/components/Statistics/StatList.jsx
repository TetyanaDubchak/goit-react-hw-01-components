import { StatElem } from "./StatListElem"
import {List, Item} from './StatList.styled'

export const StatList = ({data}) => {
    return (
        <List>
            {data.map(obj => (
                <Item key={obj.id}> 
                    <StatElem element={obj}/>
                </Item>
            ))}
        </List>
    )
}