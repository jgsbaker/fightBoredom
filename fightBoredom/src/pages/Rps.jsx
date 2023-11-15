import React, {useContext, useState, useEffect} from "react";
import {BoredomContext} from "./components/BoredomContext"
export default function RPS(){
    const {matchResults,
        getMatch,
        objectOne,
        setObjectOne,
        objectTwo,
        objects} = useContext(BoredomContext)
    const [match, setMatch] = useState([])
    const [user, setUser] = useState({
        name: ""
    })
    const [opponent, setOpponent] = useState({
        name: ""
    })
    function handleChange(e){
        const {name, value} = e.target
        setObjectOne(prev=>{
            return {
                ...prev,
                [name] : value
            }
        })
        console.log(value)
    }
    let options = objects.map(item=> <p key={item.name}>{item}</p>)
    function handleClick(){
        getMatch()
        setResults(prev=>({...prev, matchResults}))
        setMatch(prev=>[
            ...prev,
            results
        ])
    }
    return (
        <>
            <h1>RPS Game</h1>
            <p>Pick your fighter</p>
            <input autoComplete={objects}
                type="text"
                name="name"
                className="objectOne"
                value={objectOne.name}  
                onChange={handleChange}
            />
            <button onClick={()=> handleClick()}>Fight!</button>
            <div className="options">
                <p>Your options are</p>
                {options} 
            </div>
            <p>your fighter: {objectOne.name}</p>
            <p>your opponent: {objectTwo}</p>
            <p>winner: {matchResults.winner}</p>
            <p>loser: {matchResults.loser}</p>   
            <p>outcome: {matchResults.outcome}</p>
        </>
    )
}