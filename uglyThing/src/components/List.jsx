import React, {useContext, useState} from "react"
import Edit from "./Edit"
import Input from "./Input"
import UglyThing from "./UglyThing"
import Delete from "./Delete"
import {UglyContext} from "./UglyContext"
function List(){
    const {uglyThing, setUglyThing, setShowForm} = useContext(UglyContext)
        const editIt = (sessionId, updatedItem) =>{
            setUglyThing(prev => prev.map((thing, index) => sessionId !== index ? thing : updatedItem))
            setShowForm(prev => !prev)
        }
        const deleted = (sessionId)=>{
            setUglyThing(prev=>{ return prev.filter(index=> index !== sessionId)})
        }
    let things = uglyThing.map((prev, index)=>{
        return (
            <div>
                <UglyThing
                    key={prev[index]}
                    sessionId={prev._id}
                    imgUrl={prev.imgUrl}
                    title={prev.title}
                    description={prev.description}
                />
                <Edit 
                    key={prev[index]}
                    sessionId={prev._id}
                    imgUrl={prev.imgUrl}
                    title={prev.title}
                    description={prev.description}
                    editIt={editIt}
                />
                <Delete
                    key={prev[index]}
                    sessionId={prev._id}
                    imgUrl={prev.imgUrl}
                    title={prev.title}
                    description={prev.description}
                    deleted={deleted}
                />
            </div>
        )
    })
    return (
        <div>
            <Input />
            {things}
        </div>
    )
}
export default List