import { TableBody } from "./TableBody"
import { TableHead } from "./TableHead"
import {Wrap} from './TransactionHistory.styled'

export const Transaction = ({transactElem}) => {
    return (
        <Wrap>
            <TableHead />
            <TableBody transac={transactElem} />
        </Wrap>
    )
}