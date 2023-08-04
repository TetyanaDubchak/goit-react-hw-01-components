import { DescrElements } from "./DescriptionContent"
import { StatsElements } from "./StatsContent"
import { Wrap } from './Profile.styled'

import PropTypes from 'prop-types';

export const Profile = ({items}) => {
    return (
        <Wrap>
        <DescrElements item={items} /> 
        <StatsElements item={items } />
        </Wrap>
        
    )
}

Profile.propTypes = {
    items: PropTypes.object,
}