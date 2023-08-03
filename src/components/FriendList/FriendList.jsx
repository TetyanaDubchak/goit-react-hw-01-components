import { FriendListElem } from "./FriendListItem"
import {List, Item} from './FriendList.styled'

export const FriendList = ({friends}) => {
    return (
        <List>
            {friends.map(obj => (
               <Item key={obj.id}>
                    <FriendListElem friends={obj}/>
                </Item> 
            ))
            }
        </List>
    )
}