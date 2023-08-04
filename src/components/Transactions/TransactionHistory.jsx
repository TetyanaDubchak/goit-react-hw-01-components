import { TableBody } from "./TableBody"
import { TableHead } from "./TableHead"
import { Wrap } from './TransactionHistory.styled'

import PropTypes from 'prop-types';

export const Transaction = ({transactElem}) => {
    return (
        <Wrap>
            <TableHead />
            <TableBody transac={transactElem} />
        </Wrap>
    )
}

Transaction.propTypes = {
    transactElem: PropTypes.array,
}