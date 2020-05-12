import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from "./components/my_component/MyComponent";

function sayHello(name, age) {
    return <div><h2>Hi my name is {name}</h2><h3>I'm {age} years old</h3></div>
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {sayHello("Daniel", 21)}
            </header>
            <section className={"components"}>
                <MyComponent/>
            </section>
        </div>
    );
}

export default App;
