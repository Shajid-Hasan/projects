
const User = ({user}) => {
    console.log(user)

    return (
        <div className="border-1  my-5 p-5">
            <img src={user?.photo} alt="" />
            <h1>{user?.name}</h1>
            <h1>{user?.state}</h1>
        </div>
    );
};

export default User;