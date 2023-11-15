import React, {useState, useEffect, createContext} from "react"
const UglyContext = createContext()
function UglyContextProvider(props){
    const [ugly, setUgly] = useState({
        imgUrl: "",
        title: "",
        description: ""
    })
    const [showForm, setShowForm] = useState(false)
    const [uglyThing, setUglyThing] = useState([])
    function fetchData(){
        fetch("https://api.vschool.io/jackgypsybaker/thing/")
        .then(res=> res.json())
        .then(data=> {
            setUglyThing(data)})
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        fetchData()
    }, [])
    return (
        <UglyContext.Provider value={{
            uglyThing,
            showForm,
            setShowForm,
            setUglyThing,
            ugly,
            fetchData
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}
export {UglyContext, UglyContextProvider}