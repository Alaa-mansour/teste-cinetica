import React from 'react';

export function Button(props){
    return(
        <button type="button" className="btn green-btn"><h5 style={{lineHeight:2.4}}>{props.name}</h5></button>
    )
}