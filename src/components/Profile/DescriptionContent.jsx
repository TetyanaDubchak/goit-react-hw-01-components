import { Img, Name, Text } from "./DescriptionContent.styled";

export const DescrElements = ({ item: { username, tag, location, avatar } }) => {
    return (
        <div>
            <Img src={avatar} alt="" />
            <Name>{ username}</Name>
            <Text>@{tag }</Text>
            <Text>{ location}</Text>
        </div>
    )
}