import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css';

// Reducer========================================
const initialState = {
    squares: Array(9).fill('-'),
    xIsNext: true,
    done: false,
    status: 'Next: X',
}

const sammok = (state = initialState, action) => {
    // console.log("xIsNext: " + state.xIsNext)
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

const Board = ({ squares, status, onSquare, onRestart }) => (
    <div>
          <h3>{status}</h3>
          <div className="board-row">
                <button className="square" onClick={()=>onSquare(0)}>{squares[0]}</button>
                <button className="square" onClick={()=>onSquare(1)}>{squares[1]}</button>
                <button className="square" onClick={()=>onSquare(2)}>{squares[2]}</button>
          </div>
          <div className="board-row">
                <button className="square" onClick={()=>onSquare(3)}>{squares[3]}</button>
                <button className="square" onClick={()=>onSquare(4)}>{squares[4]}</button>
                <button className="square" onClick={()=>onSquare(5)}>{squares[5]}</button>
          </div>
          <div className="board-row">
                <button className="square" onClick={()=>onSquare(6)}>{squares[6]}</button>
                <button className="square" onClick={()=>onSquare(7)}>{squares[7]}</button>
                <button className="square" onClick={()=>onSquare(8)}>{squares[8]}</button>
          </div>
          <button onClick={onRestart}> Restart </button>
     </div>
)

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
