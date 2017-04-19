import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css';
import Board from './Board'
// Reducer========================================
const initialState = {
    squares: Array(9).fill('-'),
    xIsNext: true,
    done: false,
    status: 'Next: X',
}

const sammok = (state = initialState, action) => {
    switch (action.type) {
        case 'RESTART':
            state.squares = Array(9).fill('-')
            state.xIsNext = true;
            state.done = false;
            state.status = 'Next: X'
            return initialState;

        case 'CLICKSQUARE':
            console.log("좌표: " + action.index)
            if (state.done) return state;
            if (state.squares[action.index] !== '-') return state;

            if (state.xIsNext){
                state.squares[action.index] = 'X';
                state.status = 'Next: O'
            } else {
                state.squares[action.index] = 'O';
                state.status = 'Next: X'
            }

            console.log("squares: " + state.squares)
            if (calculateWinner(state.squares) === 'X') {
                state.status = 'X won'
                state.done = true;
            }
            if (calculateWinner(state.squares) === 'O') {
                state.status = 'O won'
                state.done = true;
            }
            state.xIsNext = !state.xIsNext;
            return state;
        default:
            return state;
    }
}

const store = createStore(sammok);


var row0 = [];
for (var i=0; i<3; i++) {
    row0.push()
}

// Render========================================
const render = () => {
    ReactDOM.render(
      <Board
        squares={store.getState().squares}
        status={store.getState().status}
        onSquare={(i)=>store.dispatch({type:'CLICKSQUARE', index:Number(i)})}
        onRestart={()=>store.dispatch({type:'RESTART'})}
      />,
      document.getElementById('root')
    )
}

render()
store.subscribe(render)


// for 삼목
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] !== '-' && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
