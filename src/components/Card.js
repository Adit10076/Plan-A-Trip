import { useState } from "react";
function Card({id,name,info,image,price,removeCard}){
    let description = info.substr(0,200);
    const[read_more,setReadMore] = useState("Read More");
    function toggleProp(){
        if(read_more==="Read More"){
            setReadMore("Show Less");
        }
        else if(read_more==="Show Less"){
            setReadMore("Read More");
        }
    }
    return(<div className="info-container">
        <div className="city-name">{name}</div>
        <img src ={image} alt="" className="img"></img>
        <div className="price-tour">₹{price}</div>
        <div className="description">{(read_more==="Read More")?description:info} ...<span className="read-more" onClick={toggleProp}>{read_more}</span></div>
        <button onClick={()=>removeCard(id)} className="red-btn">Not Intersested</button>
    </div>
    )
}

export default Card;