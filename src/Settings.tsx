import React, {ChangeEvent, useEffect, useState} from "react";

type SettingsType = {

}

export const Settings = (props: SettingsType) => {

    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    // const getFromLocalStorageHandler = () => {
    //     let maxValue = localStorage.getItem('maxValue')
    //     let startValue = localStorage.getItem('startValue')
    //     if (maxValue&&startValue) {
    //         setMaxValue(JSON.parse(maxValue))
    //         setStartValue(JSON.parse(startValue))
    //     }
    // }
    // useEffect(getFromLocalStorageHandler, [])
    const setLocalStorageHandler = (maxValue:number, startValue:number) => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }
    const setHandler = () => {
            setLocalStorageHandler(maxValue, startValue)
    }
    const onchangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(JSON.parse(e.currentTarget.value))
    }
    const onchangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(JSON.parse(e.currentTarget.value))
    }

    return (
        <div>
            <span>
                <h3>Max value</h3>
                <h1>{maxValue}</h1>
                <input onChange={onchangeStartValueHandler}/>
            </span>
            <span>
                <h3>Start value</h3>
                <h1>{startValue}</h1>
                <input onChange={onchangeMaxValueHandler}/>
            </span>
            <button onClick={setHandler}>Set</button>
        </div>
    )
}