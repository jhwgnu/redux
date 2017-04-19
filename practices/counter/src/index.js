import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// const counter = (state = 0, action) => {
//     switch(action.type) {
//         case 'INCREMENT1':
//             return state + 1;
//         case 'INCREMENT2':
//             console.log("test")
//             return state + 2;
//         default:
//             return state;
//     }
// }

const counter = (state = 0, action) => {
    if (action.type === 'INCREMENT1') {
        console.log("action index: " + action.index)
        return state + action.index;
    }
    else if (action.type === 'INCREMENT2') {
        return state + 2;
    }
    else {
        return state;
    }
}
const store = createStore(counter);

const Counter = ({ value, onIncrement1, onIncrement2 }) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement1}>+1</button>
        <button onClick={onIncrement2}>+2</button>
    </div>
)

const render = () => {
    console.log("state: "+store.getState())
    ReactDOM.render (
        <Counter
            value={store.getState()}
            onIncrement1={()=>store.dispatch({type:'INCREMENT1', index:5})}
            onIncrement2={()=>store.dispatch({type:'INCREMENT2'})}
            onReset={()=>store.dispatch({type:'RESET'})}
             />,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)
