import { DescrElements } from "./DescriptionContent"
import { StatsElements } from "./StatsContent"

export const Profile = ({items}) => {
    return (
        <>
        <DescrElements item={items} /> 
        <StatsElements item={items } />
        </>
        
    )
}