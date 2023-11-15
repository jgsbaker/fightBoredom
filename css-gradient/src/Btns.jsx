import React from "react"
import drawTheLine from "./drawTheLine.mp3"
export default function Btns(){
    let box1 = document.getElementById("1")
    let box2 = document.getElementById("2")
    let box3 = document.getElementById("3")
    let box4 = document.getElementById("4")
    let box5 = document.getElementById("5")
    let box6 = document.getElementById("6")
    let box7 = document.getElementById("7")
    let box8 = document.getElementById("8")
    function mixed(){
        if(box1.style.backgroundColor !== "white"){
        box4.style.backgroundColor = "white"
        box1.style.backgroundColor = "white"
        box2.style.backgroundColor = "white"
        box3.style.backgroundColor = "white"
        }
        else if(box1.style.backgroundColor === "white"){
        box4.style.backgroundColor = "black"
        box1.style.backgroundColor = "black"
        box2.style.backgroundColor = "black"
        box3.style.backgroundColor = "black"
        }
    }
    function halfPurple(){
        box4.style.backgroundColor = "purple"
        box1.style.backgroundColor = "purple"
        box2.style.backgroundColor = "purple"
        box3.style.backgroundColor = "purple"
    }
    function blue1(){
        box4.style.backgroundColor = "blue"
        box5.style.backgroundColor = "blue"
    }
    function blue2(){
        box6.style.backgroundColor = "blue"
        box7.style.backgroundColor = "blue"
    }
    function red(){
        box3.style.backgroundColor = "red"
        box7.style.backgroundColor = "red"
    }
    function green(){
        box2.style.backgroundColor = "green"
        box4.style.backgroundColor = "green"
    }
    function yellow(){
        box8.style.backgroundColor = "yellow"
        box5.style.backgroundColor = "yellow"
    }
    function orange(){
        box1.style.backgroundColor = "orange"
        box3.style.backgroundColor = "orange"
    }
    return (
        <div>
            <button onClick={mixed}>Small Time</button>
            <button onClick={halfPurple}> Party DJ</button>
            <button onClick={blue1}>DJ Pro 1</button>
            <button onClick={blue2}>DJ Pro 2</button>
            <button onClick={red}> Big Time DJ 1</button>
            <button onClick={green}>Big Time DJ 2</button>
            <button onClick={yellow}>Big Time DJ 3</button>
            <button onClick={orange}>Big Time DJ 4</button>
            <button> Play Some Music <audio autoplay loop controls src={drawTheLine}></audio></button>
        </div>
    )
}