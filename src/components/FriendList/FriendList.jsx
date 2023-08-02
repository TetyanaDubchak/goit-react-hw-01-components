import { FriendListElem } from "./FriendListItem"

export const FriendList = ({friends}) => {
    return (
        <ul>
            {friends.map(obj => (
               <li key={obj.id}>
                    <FriendListElem friends={obj}/>
                </li> 
            ))
            }
        </ul>
    )
}