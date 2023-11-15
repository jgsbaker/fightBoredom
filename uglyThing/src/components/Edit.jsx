import React, {useContext, useEffect, useState} from "react"
import {UglyContext} from "./UglyContext"
export default function Edit(props){
    const {uglyThing, showForm, setShowForm, fetchData} = useContext(UglyContext)
    const [editThing, setEditThing] = useState({
        imgUrl: "" + props.imgUrl,
        title: "" + props.title,
        description: "" + props.description
    })
    function fetchEdit(id){
        setEditThing(prev=>{
            return [
                prev,
                uglyThing
            ]
        })
        fetch(`https://api.vschool.io/jackgypsybaker/thing/${id}`, {
            method: "put",
            headers: {'Content-Type': 'application/json; charset=UTF-8'}, 
            body: JSON.stringify(editThing)
        })
        .then(res=> res.json())
        .then(data=>{
            setEditThing(data)
            fetchData()
            console.log(data)
        })
    }
    function saveEdit(id){
        fetchEdit(id)
        props.editIt(id, editThing)
    }
    function editChange(e){
        const {name, value} = e.target
        setEditThing(prev=>{
            return {
                ...prev,
                [name]:value
            }
        })
        console.log(e.target.value)
    }
    return (
        <div>
            {showForm ?
            <div>
                <input
                    className="image"
                    type="imgUrl"
                    name="image"
                    placeholder="image url"
                    value={editThing.imgUrl}
                    onChange={editChange}
                />
                <input
                    className="title"
                    type="text"
                    name="title"
                    placeholder="title"
                    value={editThing.title}
                    onChange={editChange}
                />
                <input
                    className="description"
                    type="text"
                    name="description"
                    placeholder="description"
                    value={editThing.description}
                    onChange={editChange}
                />
                <button onClick={()=>saveEdit(props.sessionId)}>Save Changes</button>
            </div>
            :
            <button onClick={()=>setShowForm(prev=>!prev)}>Edit</button>}
        </div>
    )
}