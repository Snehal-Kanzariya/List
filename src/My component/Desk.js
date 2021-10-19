import React from 'react'
import {DeskIteam} from "./DeskIteam";

export const Desk = (props) => {
    let myStyle = {
        minHeight:"60vh",
        margin: "10px auto",
        padding: "100px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-4">Desk Iteams</h3>  
            {props.desk.length===0? "No activities Add some Desk Iteams": 
            props.desk.map((des)=>{

                 return(<DeskIteam des={des} key={des.sno} onDelete = {props.onDelete}/>)
            })
            }
           
           
        </div>
    )
}
