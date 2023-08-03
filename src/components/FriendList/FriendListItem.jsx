import {Img, Text} from './FriendListItem.styled'

export const FriendListElem = ({friends}) => {
    return (
        <>
            <span></span>
            <Img src={friends.avatar} alt="User avatar" />
            <Text>{friends.name}</Text>
        </>
    )
}