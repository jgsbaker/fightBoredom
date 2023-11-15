import React, {useState, useEffect} from "react"
export default function GradientInput(){
    const [gradient, setGradient] = useState({
        color1: 0,
        color2: 0,
        color3: 0,
        angle: 0
    })
    const [code, setCode] = useState([])
    function handleChange(e)
    {
        let {name, value} = e.target
        setGradient(prevGradient =>{
            return {
                ...prevGradient,
                [name]: value
            }
        })
    }
    let angle = gradient.angle
    let color1 = gradient.color1
    let color2 = gradient.color2
    let color3 = gradient.color3
    let setColor ={ 
        mozBackground: `linear-gradient(${angle}deg , R: ${color1} ,  G: ${color2} , B: ${color3})`,
        webkit: `linear-gradient(${angle}deg ,  R: ${color1} ,  G: ${color2} , B: ${color3})`, 
        background: `linear-gradient(${angle}deg ,  R: ${color1} ,  G: ${color2} , B: ${color3})`,
    }
    useEffect(()=>{
        setCode(`-moz-background: linear-gradient(${angle}deg ,  R: ${color1} ,  G: ${color2} , B: ${color3})`, 
        `\n -webkit: linear-gradient(${angle} deg ,  R: ${color1} ,  G: ${color2} , B: ${color3})`, 
        `\n background: linear-gradient(${angle}deg ,  R: ${color1} ,  G: ${color2} , B: ${color3})`)
    }, [code])
    return (
        <div>
            <input 
                type="color"
                placeholder="color 1"
                value={gradient.color1}
                onChange={handleChange}
                name="color1"
                className="color1"
            />
            <input 
                type="color"
                placeholder="color 2"
                value={gradient.color2}
                onChange={handleChange}
                name="color2"
                className="color2"
            />
            <input 
                type="color"
                placeholder="color 3"
                value={gradient.color3}
                onChange={handleChange}
                name="color3"
                className="color3"
            />
            <input 
                type="number"
                placeholder="angle"
                value={gradient.angle}
                onChange={handleChange}
                name="angle"
                className="angle"
            />
            <div 
                style={setColor}
                onChange={handleChange}
            ></div>
            <textarea readOnly
                value={code}
                onChange={handleChange}
            />
        </div>
    )
}