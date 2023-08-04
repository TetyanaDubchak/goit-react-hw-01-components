import { FriendListElem } from "./FriendListItem"
import {List, Item} from './FriendList.styled'

import PropTypes from 'prop-types';

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

FriendList.propTypes = {
    friends: PropTypes.array,
}