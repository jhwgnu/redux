import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css';
import Board from './Board'
// Reducer========================================
var size = 19;

var init_squares = [];
for (var i=0; i<size; i++){
    init_squares[i] = [];
    for (var j=0; j<size; j++){
        init_squares[i][j] = '-';
    }
}

const initialState = {
    squares: init_squares,
    xIsNext: false,
    done: false,
    status: 'Next: O',
}

const actionHandler = (state = initialState, action) => {
    switch (action.type) {
        case 'RESTART':
            for(var i=0; i<size; i++){
                for(var j=0; j<size; j++)
                    state.squares[i][j] = '-';
            }
            state.xIsNext = false;
            state.done = false;
            state.status = 'Next: X'
            return state;

        case 'CLICKSQUARE':
            console.log("(" + action.y_idx + ", " + action.x_idx+")")
            if (state.done) return state;
            if (state.squares[action.y_idx][action.x_idx] !== '-') return state;

            if (state.xIsNext){
                state.squares[action.y_idx][action.x_idx] = 'X';
                state.status = 'Next: O'
            } else {
                state.squares[action.y_idx][action.x_idx] = 'O';
                state.status = 'Next: X'
            }

            if (calculateWinner(state.squares, action.y_idx, action.x_idx) === 'X') {
                state.status = 'X won'
                state.done = true;
            }
            if (calculateWinner(state.squares, action.y_idx, action.x_idx) === 'O') {
                state.status = 'O won'
                state.done = true;
            }
            state.xIsNext = !state.xIsNext;
            return state;
        default:
            return state;
    }
}

const store = createStore(actionHandler);

// Render========================================
const render = () => {
    ReactDOM.render(
      <Board
        squares={store.getState().squares}
        status={store.getState().status}
        onSquare={(i, j)=>store.dispatch({type:'CLICKSQUARE', y_idx:Number(i), x_idx:Number(j)})}
        onRestart={()=>store.dispatch({type:'RESTART'})}
      />,
      document.getElementById('root')
    )
}

render()
store.subscribe(render)

function calculateWinner(squares, i, j) {
    var val = squares[i][j];
    //좌우 체크
    for(let k=0; k<=4; k++){
        if(j+k<=size-1 && j+k-4>=0){
                if(val===squares[i][j+k] &&
                    val===squares[i][j+k-1] &&
                    val===squares[i][j+k-2] &&
                    val===squares[i][j+k-3] &&
                    val===squares[i][j+k-4]) return val;
        }
    }

    //위아래 체크
    for(let k=0; k<=4; k++){
        if(i+k<=size-1 && i+k-4>=0){
                if(val===squares[i+k][j] &&
                    val===squares[i+k-1][j] &&
                    val===squares[i+k-2][j] &&
                    val===squares[i+k-3][j] &&
                    val===squares[i+k-4][j]) return val;
        }
    }

    //왼쪽위-오른쪽아래 대각선 체크
    for(let k=0; k<=4; k++){
        if(i+k<=size-1 && j+k<=size-1 && i+k-4>=0 && j+k-4>=0){
                if(val===squares[i+k][j+k] &&
                    val===squares[i+k-1][j+k-1] &&
                    val===squares[i+k-2][j+k-2] &&
                    val===squares[i+k-3][j+k-3] &&
                    val===squares[i+k-4][j+k-4]) return val;
        }
    }

    //왼쪽아래-오른쪽위 대각선 체크
    for(let k=0; k<=4; k++){
        if(i+k<=size-1 && j-k+4<=size-1 && i+k-4>=0 && j-k>=0){
                if(val===squares[i+k][j-k] &&
                    val===squares[i+k-1][j-k+1] &&
                    val===squares[i+k-2][j-k+2] &&
                    val===squares[i+k-3][j-k+3] &&
                    val===squares[i+k-4][j-k+4]) return val;
        }
    }

    return null;
}
