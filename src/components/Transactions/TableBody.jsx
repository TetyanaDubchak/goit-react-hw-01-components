
export const TableBody = ({transac}) => {
    return (
        <tbody>
            {transac.map(obj => (
                <tr key={obj.id}> 
                    <td>{obj.type}</td>
                    <td>{obj.amount}</td>
                    <td>{obj.currency}</td>
                </tr>
            ))}
        </tbody>
    )
}