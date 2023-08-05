import { StatList } from "./StatList"
// import { Title } from "./Title"
import { Wrap, Text } from './Statistics.styled'
// import { Text } from './Title.styled'
import PropTypes from 'prop-types';

export const Statistics = ({title,data}) => {
    return (
        <Wrap>
            {title && <Text >{title}</Text>}
            <StatList data={ data } />
        </Wrap>
    )
}

Statistics.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
}

