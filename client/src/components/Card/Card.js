import React from "react";

export const Card = props =>
    <div className="card mt-2 mb-2">
        <h4 className="card-header">{props.title}</h4>
        <div className="card-body">
            {props.children}
        </div>
    </div>
