import { Wrap, Row, Section } from './TableBody.styled'

import PropTypes from 'prop-types';

export const TableBody = ({transac}) => {
    return (
        <Wrap>
            {transac.map(obj => (
                <Row key={obj.id}> 
                    <Section>{obj.type}</Section>
                    <Section>{obj.amount}</Section>
                    <Section>{obj.currency}</Section>
                </Row>
            ))}
        </Wrap>
    )
}

TableBody.propTypes = {
    transac: PropTypes.array,
}