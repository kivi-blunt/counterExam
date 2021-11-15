import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Settings} from "./Settings";
import {Window} from "./Window";

function App() {

    return (
        <div className="App">
            <Settings/>
            <Window/>
        </div>
    )
        ;
}

export default App;
