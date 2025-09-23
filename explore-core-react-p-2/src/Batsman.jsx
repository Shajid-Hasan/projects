import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);

    // Count Sixes
    const [sixes, setSixes] = useState(0);


    const handelSingel = () => {
        const updateRun = runs + 1;
        setRuns(updateRun)
    }

    const handelFour = () => {
        const score = runs + 4;
        setRuns(score)
    }

    const handelSix = () => {
        const updateRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes)
        setRuns(updateRuns)
    }

    
    return(
        <div>
            <h3>Player : Bangladesh</h3>
            <p><small>Six : {sixes}</small></p>
            {
                runs > 50 && <p>Your make Half Centurie</p>
            }
            <p>Score : {runs}</p>
            <button onClick={handelSingel}>Single</button>
            <button onClick={handelFour}>Four</button>
            <button onClick={handelSix}>Six</button>
        </div>
    )
}