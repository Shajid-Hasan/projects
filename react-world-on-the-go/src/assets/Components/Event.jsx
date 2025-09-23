
import { use } from "react";
import User from "./User";



const Event = ({userPromise}) => {

    const users = use(userPromise)
    console.log(users)
    // const [count, setCount] = useState(0)


    // const handelIncrease = () => {

    //     setCount(count + 1)
    //     // setCount((prev) => prev + 1)
    // }


    return (
        <>
            {/* <h1 className='text-5xl text-blue-500'>{count}</h1> */}
            {/* <button onClick={handelIncrease}>Increase</button> */}
            <div className="grid grid-cols-4 gap-5">
                {
                users.map(user => 
                    <User user={user}></User>
                )
            }
            </div>
            
        </>
    );
};

export default Event;