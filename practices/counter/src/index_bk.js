import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
                return 0;
        default:
            return state;
    }
}

const Counter = ({ value, onIncrement, onDecrement, onReset }) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>Reset</button>
    </div>
)

const store = createStore(counter);

const render = () => {
    console.log("state: "+store.getState())
    ReactDOM.render (
        <Counter
            value={store.getState()}
            onIncrement={()=>store.dispatch({type:'INCREMENT'})}
            onDecrement={()=>store.dispatch({type:'DECREMENT'})}
            onReset={()=>store.dispatch({type:'RESET'})}
             />,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
