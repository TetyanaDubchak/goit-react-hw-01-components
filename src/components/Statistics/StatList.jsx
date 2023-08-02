import { StatElem } from "./StatListElem"

export const StatList = ({data}) => {
    return (
        <ul>
            {data.map(obj => (
                <li key={obj.id}> 
                    <StatElem element={obj}/>
                </li>
            ))}
        </ul>
    )
}