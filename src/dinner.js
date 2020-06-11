import React from 'react';

function Dinner(props){
    return <div>
                <h3>{props.dishName}</h3>
                <h3>{props.sweetdishName}</h3>
            </div>
}

export default Dinner;