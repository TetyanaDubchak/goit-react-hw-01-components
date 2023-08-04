import {Img, Text, Sign} from './FriendListItem.styled'

export const FriendListElem = ({friends}) => {
    return (
        <>
            <Sign active={friends.isOnline}></Sign>
            <Img src={friends.avatar} alt="User avatar" />
            <Text>{friends.name}</Text>
        </>
    )
}