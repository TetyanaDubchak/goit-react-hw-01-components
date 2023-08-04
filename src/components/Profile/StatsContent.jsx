import { List, Item, Title, Number } from './StatsContent.styled'

import PropTypes from 'prop-types';

export const StatsElements = ({ item: { stats: { followers, views, likes } } }) => {
    return (
        <List>
            <Item>
                <Title>Followers</Title>
                <Number>{ followers}</Number>
            </Item>
            <Item>
                <Title>Views</Title>
                <Number>{ views}</Number>
            </Item>
            <Item>
                <Title>Likes</Title>
                <Number>{ likes}</Number>
            </Item>
        </List>
    )
}

StatsElements.propTypes = {
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}