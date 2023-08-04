import { FriendList } from "./FriendList"

import PropTypes from 'prop-types';

export const Friends = ({friends}) => {
    return (
        <FriendList friends={friends}/>
    )
}

Friends.propTypes = {
    friends: PropTypes.array,
}