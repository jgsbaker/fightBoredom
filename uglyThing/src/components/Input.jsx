import React, {useEffect, useState, useContext} from "react"
import {UglyContext} from "./UglyContext"
function Input(props){
    const [thingItem, setThingItem] = useState([])
    const {fetchData, setUglyThing, ugly} = useContext(UglyContext)
    const [item, setItem] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })
    function save(e){
        e.preventDefault()
        fetch("https://api.vschool.io/jackgypsybaker/thing/", {
            method: "post", 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify(item) })
        .then(res=> res.json())
        .then(data=>{
            fetchData()
            setThingItem(data)
        })
        .catch(err=> console.log(err))
    }
    function handleChange(e){
        const {name, value} = e.target
        setItem(prev=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    return (
        <div>
            <form onSubmit={save}>
                <input
                    name="imgUrl"
                    className="image"
                    type="imageUrl"
                    placeholder="image url"
                    onChange={handleChange}
                    value={item.imgUrl}
                />
                <input
                    name="title"
                    className="title"
                    type="text"
                    placeholder="title"
                    onChange={handleChange}
                    value={item.title}
                />
                <input
                    name="description"
                    className="description"
                    type="text"
                    placeholder="description"
                    onChange={handleChange}
                    value={item.description}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Input