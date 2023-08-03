import { DescrElements } from "./DescriptionContent"
import { StatsElements } from "./StatsContent"
import {Wrap} from './Profile.styled'

export const Profile = ({items}) => {
    return (
        <Wrap>
        <DescrElements item={items} /> 
        <StatsElements item={items } />
        </Wrap>
        
    )
}