function Users ({user, person}){
    console.log(user, person)
    return(
        <>
            <h1>Welcome to React World</h1>
            <h2>{user.name}</h2>
            <h2>{person.name}</h2>
            <h2>{person.id}</h2>
            <h2>{person.designation}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ad blanditiis odio vero porro quis consequatur rem nostrum, ratione, dolores ducimus corrupti delectus cupiditate adipisci nemo! Ad error perferendis quibusdam. </p>
        </>
    )
}

export default Users