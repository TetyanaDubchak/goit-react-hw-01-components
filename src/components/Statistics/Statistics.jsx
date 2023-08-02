import { StatList } from "./StatList"
import { Title } from "./Title"

export const Statistics = ({data}) => {
    return (
        <section>
            <Title />
            <StatList data={ data } />
        </section>
    )
}