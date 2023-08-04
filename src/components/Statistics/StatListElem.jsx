import { Text, Number } from './StatListElem.styled'

import PropTypes from 'prop-types';

export const StatElem = ({element}) => {
    return (
        <>
            <Text>{element.label}</Text>
            <Number>{element.percentage}%</Number>
        </>
    )
}

StatElem.propTypes = {
    element: PropTypes.object,
}