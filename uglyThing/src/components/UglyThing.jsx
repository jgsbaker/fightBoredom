import React, { useContext } from "react"
import { UglyContext } from "./UglyContext"
export default function UglyThing(props){
    const {uglyThing} = useContext(UglyContext)
    console.log(uglyThing)
    return (
        <div className="uglyThing" sessionid={props.sessionId}>
            <img className="image" src={props.imgUrl} />
            <h2 className="text top" >{props.title}</h2>
            <h2 className="text bottom" >{props.description}</h2>
        </div>
    )
}