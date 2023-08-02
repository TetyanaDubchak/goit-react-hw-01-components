import { TableBody } from "./TableBody"
import { TableHead } from "./TableHead"

export const Transaction = ({transactElem}) => {
    return (
        <table>
            <TableHead />
            <TableBody transac={transactElem} />
        </table>
    )
}