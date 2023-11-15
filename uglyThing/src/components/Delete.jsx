import React, {useContext, useState} from "react"
import { UglyContext } from "./UglyContext"
function Delete(props){
    
    const {uglyThing, setUglyThing, fetchData} = useContext(UglyContext)
    const [newList, setNewList] = useState({
        imgUrl: "" + props.imgUrl,
        title: "" + props.title,
        description:"" + props.description
    })
    function deleteIt(id){
        fetch(`https://api.vschool.io/jackgypsybaker/thing/${id}`, {
            method: "delete",
            headers: {'Content-Type': 'application/json' }, 
            body: JSON.stringify(newList[props.sessionId])
        })
        .then(res=> res.json())
        .then(data=>{
            setNewList(data)
            fetchData()
        })
        .catch(err=> console.log(err))
        props.deleted(newList[props.sessionId])
    }
    return (
        <button onClick={() => deleteIt(props.sessionId)}>Delete</button>
    )
}
export default Delete