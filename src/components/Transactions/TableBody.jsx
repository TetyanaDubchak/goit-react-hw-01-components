import {Wrap, Row, Section} from './TableBody.styled'

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