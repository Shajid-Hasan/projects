import React, { useEffect, useState } from 'react';
const Effect = () => {

    const [users, setUsers] = useState([])
    console.log(users)
    const [count, setCount] = useState(0)

    const handelCount =()=>{
        setCount(count + 1);
    }
    useEffect(() => {
        console.log('Re-rendering')
        fetch('https://fake-json-api.mock.beeceptor.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))

    }, [count])
    return (
        <div>
            <h1>Hello {count}</h1>
            <button onClick={handelCount} className='p-4 bg-blue-500 rounded cursor-pointer'>Increase</button>
        </div>
    );
};

export default Effect;