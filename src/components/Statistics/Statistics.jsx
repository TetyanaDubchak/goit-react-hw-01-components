import { StatList } from "./StatList"
import { Title } from "./Title"
import {Wrap} from './Statistics.styled'

export const Statistics = ({data}) => {
    return (
        <Wrap>
            <Title />
            <StatList data={ data } />
        </Wrap>
    )
}