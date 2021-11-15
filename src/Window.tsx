import React, {useState} from "react";

type WindowType = {}

export const Window = (props: WindowType) => {
    const [value, setValue] = useState(0)
    const incHandler = () => {
        setValue(value+1)
    }
    const resHandler = () => {
        setValue(0)
    }

    return (
        <div>
            <div>
                <h1>{value}</h1>
            </div>
            <button onClick={incHandler}>inc</button>
            <button onClick={resHandler}>reset</button>
        </div>
    )
}