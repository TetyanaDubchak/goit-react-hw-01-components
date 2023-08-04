import {Title, Row, Column} from './TableHead.styled'
export const TableHead = () => {
    return (
        <Title>
            <Row>
                <Column>Type</Column>
                <Column>Amount</Column>
                <Column>Currency</Column>
            </Row>
        </Title>
    )
}