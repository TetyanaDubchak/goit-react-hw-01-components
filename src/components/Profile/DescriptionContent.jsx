import { Img, Name, Text } from "./DescriptionContent.styled";

import PropTypes from 'prop-types';

export const DescrElements = ({ item: { username, tag, location, avatar } }) => {
    return (
        <div>
            <Img src={avatar} alt="" />
            <Name>{ username}</Name>
            <Text>@{tag }</Text>
            <Text>{ location}</Text>
        </div>
    )
}

DescrElements.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
}
    