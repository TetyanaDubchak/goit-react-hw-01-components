
export const DescrElements = ({ item: { username, tag, location, avatar } }) => {
    return (
        <div>
            <img src={avatar} alt="" />
            <p>{ username}</p>
            <p>@{tag }</p>
            <p>{ location}</p>
        </div>
    )
}