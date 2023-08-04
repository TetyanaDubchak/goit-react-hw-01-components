import { StatList } from "./StatList"
import { Title } from "./Title"
import { Wrap } from './Statistics.styled'

import PropTypes from 'prop-types';

export const Statistics = ({data}) => {
    return (
        <Wrap>
            <Title />
            <StatList data={ data } />
        </Wrap>
    )
}

Statistics.propTypes = {
    data: PropTypes.array,
}