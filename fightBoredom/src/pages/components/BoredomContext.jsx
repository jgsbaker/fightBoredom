import React, {createContext, useState, useEffect} from "react"
const BoredomContext = createContext()
function BoredomContextProvider(props){
    const [matchResults, setMatchResults] = useState({
        winner: "",
        loser: "",
        outcome: "",
        
    })
    const [objectOne, setObjectOne] = useState([])
    const [objectTwo, setObjectTwo] = useState([])
    const [objects, setObjects] = useState([])
    useEffect(()=>{
        fetch("https://rps101.pythonanywhere.com/api/v1/objects/all")
        .then(res=>res.json())
        .then(data=> {
            setObjects(data)
            console.log(data)
        })
        .catch(err=>console.log(err))
    }, [])
    function getMatch(){
        let randomNumber = Math.floor(Math.random() * objects.length)
        let enemy = objects[randomNumber]
        let one = objectOne.name
        let two = enemy
        setObjectTwo(enemy)
        console.log(one + " " + two)
        fetch(`https://rps101.pythonanywhere.com/api/v1/match?object_one=${one}&object_two=${two}`)
        .then(res=>res.json())
        .then(data=> {
            setMatchResults((prev) => ({
                ...prev,
                ...data
            }));
            console.log(matchResults)
        })
        .catch(err=>console.log(err))
    }
    return (
        <BoredomContext.Provider value={{
            matchResults,
            setMatchResults,
            getMatch,
            objectOne,
            setObjectOne,
            objectTwo,
            setObjectTwo,
            objects,
            setObjects,
        }}>
            {props.children}
        </BoredomContext.Provider>
    )
}
export {BoredomContext, BoredomContextProvider}