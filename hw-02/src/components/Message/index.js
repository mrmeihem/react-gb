import React from "react";

export const Message = ({message}) => {

    return (
        <div className = "align">
            <div className = {message.source}>
                {message.source}: {message.text}
            </div>
        </div>
    )
}