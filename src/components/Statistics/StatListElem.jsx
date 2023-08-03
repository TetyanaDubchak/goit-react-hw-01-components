import {Text, Number } from './StatListElem.styled'

export const StatElem = ({element}) => {
    return (
        <>
            <Text>{element.label}</Text>
            <Number>{element.percentage}%</Number>
        </>
    )
}