import "../style/Cards.css"
import React from 'react'
import { Description } from "./Description"


function Card({props}) {
    return (
        <div class="mt-0">
        <div class="col h-100">
                <div class="card">
                    <img src={props.img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h5 class="card-title d-inline">{props.title}</h5>
                        <h6>${props.price}</h6>
                        <div>
                            <Description props={props}/>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card