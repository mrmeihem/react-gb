import React, { useState } from "react";

export const Message = (props) => {
    const [count, setCount] = useState({ number: 0 }); 
    return (
        <div class="border">
            <h1>{ props.message }</h1>
            <h3>{ count.number }</h3>
            <button onClick={() => setCount({ number: count.number + 1 })}>Click me </button>
        </div>
    )
}