
export const FriendListElem = ({friends}) => {
    return (
        <>
            <span></span>
            <img src={friends.avatar} alt="User avatar" />
            <p>{friends.name}</p>
        </>
    )
}