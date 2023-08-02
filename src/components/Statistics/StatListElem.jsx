
export const StatElem = ({element}) => {
    return (
        <>
            <span>{element.label}</span>
            <span>{element.percentage}%</span>
        </>
    )
}