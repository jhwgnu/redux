import React from 'react'

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

export default Board
