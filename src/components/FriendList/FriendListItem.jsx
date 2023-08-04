import { Img, Text, Sign } from './FriendListItem.styled';

import PropTypes from 'prop-types';

export const FriendListElem = ({friends}) => {
    return (
        <>
            <Sign isonline={friends.isOnline.toString()}></Sign>
            <Img src={friends.avatar} alt="User avatar" />
            <Text>{friends.name}</Text>
        </>
    )
}

FriendListElem.propTypes = {
    friends: PropTypes.object,
}