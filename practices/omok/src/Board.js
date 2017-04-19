import React from 'react'

const Board = ({ squares, status, onSquare, onRestart }) => (
    <div>
          <h3>{status}</h3>


          <div className="board-row">
          <button className="square" id="0_0" onClick={()=>onSquare(0,0)}>{squares[0][0]}</button>
          <button className="square" id="0_1" onClick={()=>onSquare(0,1)}>{squares[0][1]}</button>
          <button className="square" id="0_2" onClick={()=>onSquare(0,2)}>{squares[0][2]}</button>
          <button className="square" id="0_3" onClick={()=>onSquare(0,3)}>{squares[0][3]}</button>
          <button className="square" id="0_4" onClick={()=>onSquare(0,4)}>{squares[0][4]}</button>
          <button className="square" id="0_5" onClick={()=>onSquare(0,5)}>{squares[0][5]}</button>
          <button className="square" id="0_6" onClick={()=>onSquare(0,6)}>{squares[0][6]}</button>
          <button className="square" id="0_7" onClick={()=>onSquare(0,7)}>{squares[0][7]}</button>
          <button className="square" id="0_8" onClick={()=>onSquare(0,8)}>{squares[0][8]}</button>
          <button className="square" id="0_9" onClick={()=>onSquare(0,9)}>{squares[0][9]}</button>
          <button className="square" id="0_10" onClick={()=>onSquare(0,10)}>{squares[0][10]}</button>
          <button className="square" id="0_11" onClick={()=>onSquare(0,11)}>{squares[0][11]}</button>
          <button className="square" id="0_12" onClick={()=>onSquare(0,12)}>{squares[0][12]}</button>
          <button className="square" id="0_13" onClick={()=>onSquare(0,13)}>{squares[0][13]}</button>
          <button className="square" id="0_14" onClick={()=>onSquare(0,14)}>{squares[0][14]}</button>
          <button className="square" id="0_15" onClick={()=>onSquare(0,15)}>{squares[0][15]}</button>
          <button className="square" id="0_16" onClick={()=>onSquare(0,16)}>{squares[0][16]}</button>
          <button className="square" id="0_17" onClick={()=>onSquare(0,17)}>{squares[0][17]}</button>
          <button className="square" id="0_18" onClick={()=>onSquare(0,18)}>{squares[0][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="1_0" onClick={()=>onSquare(1,0)}>{squares[1][0]}</button>
          <button className="square" id="1_1" onClick={()=>onSquare(1,1)}>{squares[1][1]}</button>
          <button className="square" id="1_2" onClick={()=>onSquare(1,2)}>{squares[1][2]}</button>
          <button className="square" id="1_3" onClick={()=>onSquare(1,3)}>{squares[1][3]}</button>
          <button className="square" id="1_4" onClick={()=>onSquare(1,4)}>{squares[1][4]}</button>
          <button className="square" id="1_5" onClick={()=>onSquare(1,5)}>{squares[1][5]}</button>
          <button className="square" id="1_6" onClick={()=>onSquare(1,6)}>{squares[1][6]}</button>
          <button className="square" id="1_7" onClick={()=>onSquare(1,7)}>{squares[1][7]}</button>
          <button className="square" id="1_8" onClick={()=>onSquare(1,8)}>{squares[1][8]}</button>
          <button className="square" id="1_9" onClick={()=>onSquare(1,9)}>{squares[1][9]}</button>
          <button className="square" id="1_10" onClick={()=>onSquare(1,10)}>{squares[1][10]}</button>
          <button className="square" id="1_11" onClick={()=>onSquare(1,11)}>{squares[1][11]}</button>
          <button className="square" id="1_12" onClick={()=>onSquare(1,12)}>{squares[1][12]}</button>
          <button className="square" id="1_13" onClick={()=>onSquare(1,13)}>{squares[1][13]}</button>
          <button className="square" id="1_14" onClick={()=>onSquare(1,14)}>{squares[1][14]}</button>
          <button className="square" id="1_15" onClick={()=>onSquare(1,15)}>{squares[1][15]}</button>
          <button className="square" id="1_16" onClick={()=>onSquare(1,16)}>{squares[1][16]}</button>
          <button className="square" id="1_17" onClick={()=>onSquare(1,17)}>{squares[1][17]}</button>
          <button className="square" id="1_18" onClick={()=>onSquare(1,18)}>{squares[1][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="2_0" onClick={()=>onSquare(2,0)}>{squares[2][0]}</button>
          <button className="square" id="2_1" onClick={()=>onSquare(2,1)}>{squares[2][1]}</button>
          <button className="square" id="2_2" onClick={()=>onSquare(2,2)}>{squares[2][2]}</button>
          <button className="square" id="2_3" onClick={()=>onSquare(2,3)}>{squares[2][3]}</button>
          <button className="square" id="2_4" onClick={()=>onSquare(2,4)}>{squares[2][4]}</button>
          <button className="square" id="2_5" onClick={()=>onSquare(2,5)}>{squares[2][5]}</button>
          <button className="square" id="2_6" onClick={()=>onSquare(2,6)}>{squares[2][6]}</button>
          <button className="square" id="2_7" onClick={()=>onSquare(2,7)}>{squares[2][7]}</button>
          <button className="square" id="2_8" onClick={()=>onSquare(2,8)}>{squares[2][8]}</button>
          <button className="square" id="2_9" onClick={()=>onSquare(2,9)}>{squares[2][9]}</button>
          <button className="square" id="2_10" onClick={()=>onSquare(2,10)}>{squares[2][10]}</button>
          <button className="square" id="2_11" onClick={()=>onSquare(2,11)}>{squares[2][11]}</button>
          <button className="square" id="2_12" onClick={()=>onSquare(2,12)}>{squares[2][12]}</button>
          <button className="square" id="2_13" onClick={()=>onSquare(2,13)}>{squares[2][13]}</button>
          <button className="square" id="2_14" onClick={()=>onSquare(2,14)}>{squares[2][14]}</button>
          <button className="square" id="2_15" onClick={()=>onSquare(2,15)}>{squares[2][15]}</button>
          <button className="square" id="2_16" onClick={()=>onSquare(2,16)}>{squares[2][16]}</button>
          <button className="square" id="2_17" onClick={()=>onSquare(2,17)}>{squares[2][17]}</button>
          <button className="square" id="2_18" onClick={()=>onSquare(2,18)}>{squares[2][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="3_0" onClick={()=>onSquare(3,0)}>{squares[3][0]}</button>
          <button className="square" id="3_1" onClick={()=>onSquare(3,1)}>{squares[3][1]}</button>
          <button className="square" id="3_2" onClick={()=>onSquare(3,2)}>{squares[3][2]}</button>
          <button className="square" id="3_3" onClick={()=>onSquare(3,3)}>{squares[3][3]}</button>
          <button className="square" id="3_4" onClick={()=>onSquare(3,4)}>{squares[3][4]}</button>
          <button className="square" id="3_5" onClick={()=>onSquare(3,5)}>{squares[3][5]}</button>
          <button className="square" id="3_6" onClick={()=>onSquare(3,6)}>{squares[3][6]}</button>
          <button className="square" id="3_7" onClick={()=>onSquare(3,7)}>{squares[3][7]}</button>
          <button className="square" id="3_8" onClick={()=>onSquare(3,8)}>{squares[3][8]}</button>
          <button className="square" id="3_9" onClick={()=>onSquare(3,9)}>{squares[3][9]}</button>
          <button className="square" id="3_10" onClick={()=>onSquare(3,10)}>{squares[3][10]}</button>
          <button className="square" id="3_11" onClick={()=>onSquare(3,11)}>{squares[3][11]}</button>
          <button className="square" id="3_12" onClick={()=>onSquare(3,12)}>{squares[3][12]}</button>
          <button className="square" id="3_13" onClick={()=>onSquare(3,13)}>{squares[3][13]}</button>
          <button className="square" id="3_14" onClick={()=>onSquare(3,14)}>{squares[3][14]}</button>
          <button className="square" id="3_15" onClick={()=>onSquare(3,15)}>{squares[3][15]}</button>
          <button className="square" id="3_16" onClick={()=>onSquare(3,16)}>{squares[3][16]}</button>
          <button className="square" id="3_17" onClick={()=>onSquare(3,17)}>{squares[3][17]}</button>
          <button className="square" id="3_18" onClick={()=>onSquare(3,18)}>{squares[3][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="4_0" onClick={()=>onSquare(4,0)}>{squares[4][0]}</button>
          <button className="square" id="4_1" onClick={()=>onSquare(4,1)}>{squares[4][1]}</button>
          <button className="square" id="4_2" onClick={()=>onSquare(4,2)}>{squares[4][2]}</button>
          <button className="square" id="4_3" onClick={()=>onSquare(4,3)}>{squares[4][3]}</button>
          <button className="square" id="4_4" onClick={()=>onSquare(4,4)}>{squares[4][4]}</button>
          <button className="square" id="4_5" onClick={()=>onSquare(4,5)}>{squares[4][5]}</button>
          <button className="square" id="4_6" onClick={()=>onSquare(4,6)}>{squares[4][6]}</button>
          <button className="square" id="4_7" onClick={()=>onSquare(4,7)}>{squares[4][7]}</button>
          <button className="square" id="4_8" onClick={()=>onSquare(4,8)}>{squares[4][8]}</button>
          <button className="square" id="4_9" onClick={()=>onSquare(4,9)}>{squares[4][9]}</button>
          <button className="square" id="4_10" onClick={()=>onSquare(4,10)}>{squares[4][10]}</button>
          <button className="square" id="4_11" onClick={()=>onSquare(4,11)}>{squares[4][11]}</button>
          <button className="square" id="4_12" onClick={()=>onSquare(4,12)}>{squares[4][12]}</button>
          <button className="square" id="4_13" onClick={()=>onSquare(4,13)}>{squares[4][13]}</button>
          <button className="square" id="4_14" onClick={()=>onSquare(4,14)}>{squares[4][14]}</button>
          <button className="square" id="4_15" onClick={()=>onSquare(4,15)}>{squares[4][15]}</button>
          <button className="square" id="4_16" onClick={()=>onSquare(4,16)}>{squares[4][16]}</button>
          <button className="square" id="4_17" onClick={()=>onSquare(4,17)}>{squares[4][17]}</button>
          <button className="square" id="4_18" onClick={()=>onSquare(4,18)}>{squares[4][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="5_0" onClick={()=>onSquare(5,0)}>{squares[5][0]}</button>
          <button className="square" id="5_1" onClick={()=>onSquare(5,1)}>{squares[5][1]}</button>
          <button className="square" id="5_2" onClick={()=>onSquare(5,2)}>{squares[5][2]}</button>
          <button className="square" id="5_3" onClick={()=>onSquare(5,3)}>{squares[5][3]}</button>
          <button className="square" id="5_4" onClick={()=>onSquare(5,4)}>{squares[5][4]}</button>
          <button className="square" id="5_5" onClick={()=>onSquare(5,5)}>{squares[5][5]}</button>
          <button className="square" id="5_6" onClick={()=>onSquare(5,6)}>{squares[5][6]}</button>
          <button className="square" id="5_7" onClick={()=>onSquare(5,7)}>{squares[5][7]}</button>
          <button className="square" id="5_8" onClick={()=>onSquare(5,8)}>{squares[5][8]}</button>
          <button className="square" id="5_9" onClick={()=>onSquare(5,9)}>{squares[5][9]}</button>
          <button className="square" id="5_10" onClick={()=>onSquare(5,10)}>{squares[5][10]}</button>
          <button className="square" id="5_11" onClick={()=>onSquare(5,11)}>{squares[5][11]}</button>
          <button className="square" id="5_12" onClick={()=>onSquare(5,12)}>{squares[5][12]}</button>
          <button className="square" id="5_13" onClick={()=>onSquare(5,13)}>{squares[5][13]}</button>
          <button className="square" id="5_14" onClick={()=>onSquare(5,14)}>{squares[5][14]}</button>
          <button className="square" id="5_15" onClick={()=>onSquare(5,15)}>{squares[5][15]}</button>
          <button className="square" id="5_16" onClick={()=>onSquare(5,16)}>{squares[5][16]}</button>
          <button className="square" id="5_17" onClick={()=>onSquare(5,17)}>{squares[5][17]}</button>
          <button className="square" id="5_18" onClick={()=>onSquare(5,18)}>{squares[5][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="6_0" onClick={()=>onSquare(6,0)}>{squares[6][0]}</button>
          <button className="square" id="6_1" onClick={()=>onSquare(6,1)}>{squares[6][1]}</button>
          <button className="square" id="6_2" onClick={()=>onSquare(6,2)}>{squares[6][2]}</button>
          <button className="square" id="6_3" onClick={()=>onSquare(6,3)}>{squares[6][3]}</button>
          <button className="square" id="6_4" onClick={()=>onSquare(6,4)}>{squares[6][4]}</button>
          <button className="square" id="6_5" onClick={()=>onSquare(6,5)}>{squares[6][5]}</button>
          <button className="square" id="6_6" onClick={()=>onSquare(6,6)}>{squares[6][6]}</button>
          <button className="square" id="6_7" onClick={()=>onSquare(6,7)}>{squares[6][7]}</button>
          <button className="square" id="6_8" onClick={()=>onSquare(6,8)}>{squares[6][8]}</button>
          <button className="square" id="6_9" onClick={()=>onSquare(6,9)}>{squares[6][9]}</button>
          <button className="square" id="6_10" onClick={()=>onSquare(6,10)}>{squares[6][10]}</button>
          <button className="square" id="6_11" onClick={()=>onSquare(6,11)}>{squares[6][11]}</button>
          <button className="square" id="6_12" onClick={()=>onSquare(6,12)}>{squares[6][12]}</button>
          <button className="square" id="6_13" onClick={()=>onSquare(6,13)}>{squares[6][13]}</button>
          <button className="square" id="6_14" onClick={()=>onSquare(6,14)}>{squares[6][14]}</button>
          <button className="square" id="6_15" onClick={()=>onSquare(6,15)}>{squares[6][15]}</button>
          <button className="square" id="6_16" onClick={()=>onSquare(6,16)}>{squares[6][16]}</button>
          <button className="square" id="6_17" onClick={()=>onSquare(6,17)}>{squares[6][17]}</button>
          <button className="square" id="6_18" onClick={()=>onSquare(6,18)}>{squares[6][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="7_0" onClick={()=>onSquare(7,0)}>{squares[7][0]}</button>
          <button className="square" id="7_1" onClick={()=>onSquare(7,1)}>{squares[7][1]}</button>
          <button className="square" id="7_2" onClick={()=>onSquare(7,2)}>{squares[7][2]}</button>
          <button className="square" id="7_3" onClick={()=>onSquare(7,3)}>{squares[7][3]}</button>
          <button className="square" id="7_4" onClick={()=>onSquare(7,4)}>{squares[7][4]}</button>
          <button className="square" id="7_5" onClick={()=>onSquare(7,5)}>{squares[7][5]}</button>
          <button className="square" id="7_6" onClick={()=>onSquare(7,6)}>{squares[7][6]}</button>
          <button className="square" id="7_7" onClick={()=>onSquare(7,7)}>{squares[7][7]}</button>
          <button className="square" id="7_8" onClick={()=>onSquare(7,8)}>{squares[7][8]}</button>
          <button className="square" id="7_9" onClick={()=>onSquare(7,9)}>{squares[7][9]}</button>
          <button className="square" id="7_10" onClick={()=>onSquare(7,10)}>{squares[7][10]}</button>
          <button className="square" id="7_11" onClick={()=>onSquare(7,11)}>{squares[7][11]}</button>
          <button className="square" id="7_12" onClick={()=>onSquare(7,12)}>{squares[7][12]}</button>
          <button className="square" id="7_13" onClick={()=>onSquare(7,13)}>{squares[7][13]}</button>
          <button className="square" id="7_14" onClick={()=>onSquare(7,14)}>{squares[7][14]}</button>
          <button className="square" id="7_15" onClick={()=>onSquare(7,15)}>{squares[7][15]}</button>
          <button className="square" id="7_16" onClick={()=>onSquare(7,16)}>{squares[7][16]}</button>
          <button className="square" id="7_17" onClick={()=>onSquare(7,17)}>{squares[7][17]}</button>
          <button className="square" id="7_18" onClick={()=>onSquare(7,18)}>{squares[7][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="8_0" onClick={()=>onSquare(8,0)}>{squares[8][0]}</button>
          <button className="square" id="8_1" onClick={()=>onSquare(8,1)}>{squares[8][1]}</button>
          <button className="square" id="8_2" onClick={()=>onSquare(8,2)}>{squares[8][2]}</button>
          <button className="square" id="8_3" onClick={()=>onSquare(8,3)}>{squares[8][3]}</button>
          <button className="square" id="8_4" onClick={()=>onSquare(8,4)}>{squares[8][4]}</button>
          <button className="square" id="8_5" onClick={()=>onSquare(8,5)}>{squares[8][5]}</button>
          <button className="square" id="8_6" onClick={()=>onSquare(8,6)}>{squares[8][6]}</button>
          <button className="square" id="8_7" onClick={()=>onSquare(8,7)}>{squares[8][7]}</button>
          <button className="square" id="8_8" onClick={()=>onSquare(8,8)}>{squares[8][8]}</button>
          <button className="square" id="8_9" onClick={()=>onSquare(8,9)}>{squares[8][9]}</button>
          <button className="square" id="8_10" onClick={()=>onSquare(8,10)}>{squares[8][10]}</button>
          <button className="square" id="8_11" onClick={()=>onSquare(8,11)}>{squares[8][11]}</button>
          <button className="square" id="8_12" onClick={()=>onSquare(8,12)}>{squares[8][12]}</button>
          <button className="square" id="8_13" onClick={()=>onSquare(8,13)}>{squares[8][13]}</button>
          <button className="square" id="8_14" onClick={()=>onSquare(8,14)}>{squares[8][14]}</button>
          <button className="square" id="8_15" onClick={()=>onSquare(8,15)}>{squares[8][15]}</button>
          <button className="square" id="8_16" onClick={()=>onSquare(8,16)}>{squares[8][16]}</button>
          <button className="square" id="8_17" onClick={()=>onSquare(8,17)}>{squares[8][17]}</button>
          <button className="square" id="8_18" onClick={()=>onSquare(8,18)}>{squares[8][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="9_0" onClick={()=>onSquare(9,0)}>{squares[9][0]}</button>
          <button className="square" id="9_1" onClick={()=>onSquare(9,1)}>{squares[9][1]}</button>
          <button className="square" id="9_2" onClick={()=>onSquare(9,2)}>{squares[9][2]}</button>
          <button className="square" id="9_3" onClick={()=>onSquare(9,3)}>{squares[9][3]}</button>
          <button className="square" id="9_4" onClick={()=>onSquare(9,4)}>{squares[9][4]}</button>
          <button className="square" id="9_5" onClick={()=>onSquare(9,5)}>{squares[9][5]}</button>
          <button className="square" id="9_6" onClick={()=>onSquare(9,6)}>{squares[9][6]}</button>
          <button className="square" id="9_7" onClick={()=>onSquare(9,7)}>{squares[9][7]}</button>
          <button className="square" id="9_8" onClick={()=>onSquare(9,8)}>{squares[9][8]}</button>
          <button className="square" id="9_9" onClick={()=>onSquare(9,9)}>{squares[9][9]}</button>
          <button className="square" id="9_10" onClick={()=>onSquare(9,10)}>{squares[9][10]}</button>
          <button className="square" id="9_11" onClick={()=>onSquare(9,11)}>{squares[9][11]}</button>
          <button className="square" id="9_12" onClick={()=>onSquare(9,12)}>{squares[9][12]}</button>
          <button className="square" id="9_13" onClick={()=>onSquare(9,13)}>{squares[9][13]}</button>
          <button className="square" id="9_14" onClick={()=>onSquare(9,14)}>{squares[9][14]}</button>
          <button className="square" id="9_15" onClick={()=>onSquare(9,15)}>{squares[9][15]}</button>
          <button className="square" id="9_16" onClick={()=>onSquare(9,16)}>{squares[9][16]}</button>
          <button className="square" id="9_17" onClick={()=>onSquare(9,17)}>{squares[9][17]}</button>
          <button className="square" id="9_18" onClick={()=>onSquare(9,18)}>{squares[9][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="10_0" onClick={()=>onSquare(10,0)}>{squares[10][0]}</button>
          <button className="square" id="10_1" onClick={()=>onSquare(10,1)}>{squares[10][1]}</button>
          <button className="square" id="10_2" onClick={()=>onSquare(10,2)}>{squares[10][2]}</button>
          <button className="square" id="10_3" onClick={()=>onSquare(10,3)}>{squares[10][3]}</button>
          <button className="square" id="10_4" onClick={()=>onSquare(10,4)}>{squares[10][4]}</button>
          <button className="square" id="10_5" onClick={()=>onSquare(10,5)}>{squares[10][5]}</button>
          <button className="square" id="10_6" onClick={()=>onSquare(10,6)}>{squares[10][6]}</button>
          <button className="square" id="10_7" onClick={()=>onSquare(10,7)}>{squares[10][7]}</button>
          <button className="square" id="10_8" onClick={()=>onSquare(10,8)}>{squares[10][8]}</button>
          <button className="square" id="10_9" onClick={()=>onSquare(10,9)}>{squares[10][9]}</button>
          <button className="square" id="10_10" onClick={()=>onSquare(10,10)}>{squares[10][10]}</button>
          <button className="square" id="10_11" onClick={()=>onSquare(10,11)}>{squares[10][11]}</button>
          <button className="square" id="10_12" onClick={()=>onSquare(10,12)}>{squares[10][12]}</button>
          <button className="square" id="10_13" onClick={()=>onSquare(10,13)}>{squares[10][13]}</button>
          <button className="square" id="10_14" onClick={()=>onSquare(10,14)}>{squares[10][14]}</button>
          <button className="square" id="10_15" onClick={()=>onSquare(10,15)}>{squares[10][15]}</button>
          <button className="square" id="10_16" onClick={()=>onSquare(10,16)}>{squares[10][16]}</button>
          <button className="square" id="10_17" onClick={()=>onSquare(10,17)}>{squares[10][17]}</button>
          <button className="square" id="10_18" onClick={()=>onSquare(10,18)}>{squares[10][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="11_0" onClick={()=>onSquare(11,0)}>{squares[11][0]}</button>
          <button className="square" id="11_1" onClick={()=>onSquare(11,1)}>{squares[11][1]}</button>
          <button className="square" id="11_2" onClick={()=>onSquare(11,2)}>{squares[11][2]}</button>
          <button className="square" id="11_3" onClick={()=>onSquare(11,3)}>{squares[11][3]}</button>
          <button className="square" id="11_4" onClick={()=>onSquare(11,4)}>{squares[11][4]}</button>
          <button className="square" id="11_5" onClick={()=>onSquare(11,5)}>{squares[11][5]}</button>
          <button className="square" id="11_6" onClick={()=>onSquare(11,6)}>{squares[11][6]}</button>
          <button className="square" id="11_7" onClick={()=>onSquare(11,7)}>{squares[11][7]}</button>
          <button className="square" id="11_8" onClick={()=>onSquare(11,8)}>{squares[11][8]}</button>
          <button className="square" id="11_9" onClick={()=>onSquare(11,9)}>{squares[11][9]}</button>
          <button className="square" id="11_10" onClick={()=>onSquare(11,10)}>{squares[11][10]}</button>
          <button className="square" id="11_11" onClick={()=>onSquare(11,11)}>{squares[11][11]}</button>
          <button className="square" id="11_12" onClick={()=>onSquare(11,12)}>{squares[11][12]}</button>
          <button className="square" id="11_13" onClick={()=>onSquare(11,13)}>{squares[11][13]}</button>
          <button className="square" id="11_14" onClick={()=>onSquare(11,14)}>{squares[11][14]}</button>
          <button className="square" id="11_15" onClick={()=>onSquare(11,15)}>{squares[11][15]}</button>
          <button className="square" id="11_16" onClick={()=>onSquare(11,16)}>{squares[11][16]}</button>
          <button className="square" id="11_17" onClick={()=>onSquare(11,17)}>{squares[11][17]}</button>
          <button className="square" id="11_18" onClick={()=>onSquare(11,18)}>{squares[11][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="12_0" onClick={()=>onSquare(12,0)}>{squares[12][0]}</button>
          <button className="square" id="12_1" onClick={()=>onSquare(12,1)}>{squares[12][1]}</button>
          <button className="square" id="12_2" onClick={()=>onSquare(12,2)}>{squares[12][2]}</button>
          <button className="square" id="12_3" onClick={()=>onSquare(12,3)}>{squares[12][3]}</button>
          <button className="square" id="12_4" onClick={()=>onSquare(12,4)}>{squares[12][4]}</button>
          <button className="square" id="12_5" onClick={()=>onSquare(12,5)}>{squares[12][5]}</button>
          <button className="square" id="12_6" onClick={()=>onSquare(12,6)}>{squares[12][6]}</button>
          <button className="square" id="12_7" onClick={()=>onSquare(12,7)}>{squares[12][7]}</button>
          <button className="square" id="12_8" onClick={()=>onSquare(12,8)}>{squares[12][8]}</button>
          <button className="square" id="12_9" onClick={()=>onSquare(12,9)}>{squares[12][9]}</button>
          <button className="square" id="12_10" onClick={()=>onSquare(12,10)}>{squares[12][10]}</button>
          <button className="square" id="12_11" onClick={()=>onSquare(12,11)}>{squares[12][11]}</button>
          <button className="square" id="12_12" onClick={()=>onSquare(12,12)}>{squares[12][12]}</button>
          <button className="square" id="12_13" onClick={()=>onSquare(12,13)}>{squares[12][13]}</button>
          <button className="square" id="12_14" onClick={()=>onSquare(12,14)}>{squares[12][14]}</button>
          <button className="square" id="12_15" onClick={()=>onSquare(12,15)}>{squares[12][15]}</button>
          <button className="square" id="12_16" onClick={()=>onSquare(12,16)}>{squares[12][16]}</button>
          <button className="square" id="12_17" onClick={()=>onSquare(12,17)}>{squares[12][17]}</button>
          <button className="square" id="12_18" onClick={()=>onSquare(12,18)}>{squares[12][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="13_0" onClick={()=>onSquare(13,0)}>{squares[13][0]}</button>
          <button className="square" id="13_1" onClick={()=>onSquare(13,1)}>{squares[13][1]}</button>
          <button className="square" id="13_2" onClick={()=>onSquare(13,2)}>{squares[13][2]}</button>
          <button className="square" id="13_3" onClick={()=>onSquare(13,3)}>{squares[13][3]}</button>
          <button className="square" id="13_4" onClick={()=>onSquare(13,4)}>{squares[13][4]}</button>
          <button className="square" id="13_5" onClick={()=>onSquare(13,5)}>{squares[13][5]}</button>
          <button className="square" id="13_6" onClick={()=>onSquare(13,6)}>{squares[13][6]}</button>
          <button className="square" id="13_7" onClick={()=>onSquare(13,7)}>{squares[13][7]}</button>
          <button className="square" id="13_8" onClick={()=>onSquare(13,8)}>{squares[13][8]}</button>
          <button className="square" id="13_9" onClick={()=>onSquare(13,9)}>{squares[13][9]}</button>
          <button className="square" id="13_10" onClick={()=>onSquare(13,10)}>{squares[13][10]}</button>
          <button className="square" id="13_11" onClick={()=>onSquare(13,11)}>{squares[13][11]}</button>
          <button className="square" id="13_12" onClick={()=>onSquare(13,12)}>{squares[13][12]}</button>
          <button className="square" id="13_13" onClick={()=>onSquare(13,13)}>{squares[13][13]}</button>
          <button className="square" id="13_14" onClick={()=>onSquare(13,14)}>{squares[13][14]}</button>
          <button className="square" id="13_15" onClick={()=>onSquare(13,15)}>{squares[13][15]}</button>
          <button className="square" id="13_16" onClick={()=>onSquare(13,16)}>{squares[13][16]}</button>
          <button className="square" id="13_17" onClick={()=>onSquare(13,17)}>{squares[13][17]}</button>
          <button className="square" id="13_18" onClick={()=>onSquare(13,18)}>{squares[13][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="14_0" onClick={()=>onSquare(14,0)}>{squares[14][0]}</button>
          <button className="square" id="14_1" onClick={()=>onSquare(14,1)}>{squares[14][1]}</button>
          <button className="square" id="14_2" onClick={()=>onSquare(14,2)}>{squares[14][2]}</button>
          <button className="square" id="14_3" onClick={()=>onSquare(14,3)}>{squares[14][3]}</button>
          <button className="square" id="14_4" onClick={()=>onSquare(14,4)}>{squares[14][4]}</button>
          <button className="square" id="14_5" onClick={()=>onSquare(14,5)}>{squares[14][5]}</button>
          <button className="square" id="14_6" onClick={()=>onSquare(14,6)}>{squares[14][6]}</button>
          <button className="square" id="14_7" onClick={()=>onSquare(14,7)}>{squares[14][7]}</button>
          <button className="square" id="14_8" onClick={()=>onSquare(14,8)}>{squares[14][8]}</button>
          <button className="square" id="14_9" onClick={()=>onSquare(14,9)}>{squares[14][9]}</button>
          <button className="square" id="14_10" onClick={()=>onSquare(14,10)}>{squares[14][10]}</button>
          <button className="square" id="14_11" onClick={()=>onSquare(14,11)}>{squares[14][11]}</button>
          <button className="square" id="14_12" onClick={()=>onSquare(14,12)}>{squares[14][12]}</button>
          <button className="square" id="14_13" onClick={()=>onSquare(14,13)}>{squares[14][13]}</button>
          <button className="square" id="14_14" onClick={()=>onSquare(14,14)}>{squares[14][14]}</button>
          <button className="square" id="14_15" onClick={()=>onSquare(14,15)}>{squares[14][15]}</button>
          <button className="square" id="14_16" onClick={()=>onSquare(14,16)}>{squares[14][16]}</button>
          <button className="square" id="14_17" onClick={()=>onSquare(14,17)}>{squares[14][17]}</button>
          <button className="square" id="14_18" onClick={()=>onSquare(14,18)}>{squares[14][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="15_0" onClick={()=>onSquare(15,0)}>{squares[15][0]}</button>
          <button className="square" id="15_1" onClick={()=>onSquare(15,1)}>{squares[15][1]}</button>
          <button className="square" id="15_2" onClick={()=>onSquare(15,2)}>{squares[15][2]}</button>
          <button className="square" id="15_3" onClick={()=>onSquare(15,3)}>{squares[15][3]}</button>
          <button className="square" id="15_4" onClick={()=>onSquare(15,4)}>{squares[15][4]}</button>
          <button className="square" id="15_5" onClick={()=>onSquare(15,5)}>{squares[15][5]}</button>
          <button className="square" id="15_6" onClick={()=>onSquare(15,6)}>{squares[15][6]}</button>
          <button className="square" id="15_7" onClick={()=>onSquare(15,7)}>{squares[15][7]}</button>
          <button className="square" id="15_8" onClick={()=>onSquare(15,8)}>{squares[15][8]}</button>
          <button className="square" id="15_9" onClick={()=>onSquare(15,9)}>{squares[15][9]}</button>
          <button className="square" id="15_10" onClick={()=>onSquare(15,10)}>{squares[15][10]}</button>
          <button className="square" id="15_11" onClick={()=>onSquare(15,11)}>{squares[15][11]}</button>
          <button className="square" id="15_12" onClick={()=>onSquare(15,12)}>{squares[15][12]}</button>
          <button className="square" id="15_13" onClick={()=>onSquare(15,13)}>{squares[15][13]}</button>
          <button className="square" id="15_14" onClick={()=>onSquare(15,14)}>{squares[15][14]}</button>
          <button className="square" id="15_15" onClick={()=>onSquare(15,15)}>{squares[15][15]}</button>
          <button className="square" id="15_16" onClick={()=>onSquare(15,16)}>{squares[15][16]}</button>
          <button className="square" id="15_17" onClick={()=>onSquare(15,17)}>{squares[15][17]}</button>
          <button className="square" id="15_18" onClick={()=>onSquare(15,18)}>{squares[15][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="16_0" onClick={()=>onSquare(16,0)}>{squares[16][0]}</button>
          <button className="square" id="16_1" onClick={()=>onSquare(16,1)}>{squares[16][1]}</button>
          <button className="square" id="16_2" onClick={()=>onSquare(16,2)}>{squares[16][2]}</button>
          <button className="square" id="16_3" onClick={()=>onSquare(16,3)}>{squares[16][3]}</button>
          <button className="square" id="16_4" onClick={()=>onSquare(16,4)}>{squares[16][4]}</button>
          <button className="square" id="16_5" onClick={()=>onSquare(16,5)}>{squares[16][5]}</button>
          <button className="square" id="16_6" onClick={()=>onSquare(16,6)}>{squares[16][6]}</button>
          <button className="square" id="16_7" onClick={()=>onSquare(16,7)}>{squares[16][7]}</button>
          <button className="square" id="16_8" onClick={()=>onSquare(16,8)}>{squares[16][8]}</button>
          <button className="square" id="16_9" onClick={()=>onSquare(16,9)}>{squares[16][9]}</button>
          <button className="square" id="16_10" onClick={()=>onSquare(16,10)}>{squares[16][10]}</button>
          <button className="square" id="16_11" onClick={()=>onSquare(16,11)}>{squares[16][11]}</button>
          <button className="square" id="16_12" onClick={()=>onSquare(16,12)}>{squares[16][12]}</button>
          <button className="square" id="16_13" onClick={()=>onSquare(16,13)}>{squares[16][13]}</button>
          <button className="square" id="16_14" onClick={()=>onSquare(16,14)}>{squares[16][14]}</button>
          <button className="square" id="16_15" onClick={()=>onSquare(16,15)}>{squares[16][15]}</button>
          <button className="square" id="16_16" onClick={()=>onSquare(16,16)}>{squares[16][16]}</button>
          <button className="square" id="16_17" onClick={()=>onSquare(16,17)}>{squares[16][17]}</button>
          <button className="square" id="16_18" onClick={()=>onSquare(16,18)}>{squares[16][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="17_0" onClick={()=>onSquare(17,0)}>{squares[17][0]}</button>
          <button className="square" id="17_1" onClick={()=>onSquare(17,1)}>{squares[17][1]}</button>
          <button className="square" id="17_2" onClick={()=>onSquare(17,2)}>{squares[17][2]}</button>
          <button className="square" id="17_3" onClick={()=>onSquare(17,3)}>{squares[17][3]}</button>
          <button className="square" id="17_4" onClick={()=>onSquare(17,4)}>{squares[17][4]}</button>
          <button className="square" id="17_5" onClick={()=>onSquare(17,5)}>{squares[17][5]}</button>
          <button className="square" id="17_6" onClick={()=>onSquare(17,6)}>{squares[17][6]}</button>
          <button className="square" id="17_7" onClick={()=>onSquare(17,7)}>{squares[17][7]}</button>
          <button className="square" id="17_8" onClick={()=>onSquare(17,8)}>{squares[17][8]}</button>
          <button className="square" id="17_9" onClick={()=>onSquare(17,9)}>{squares[17][9]}</button>
          <button className="square" id="17_10" onClick={()=>onSquare(17,10)}>{squares[17][10]}</button>
          <button className="square" id="17_11" onClick={()=>onSquare(17,11)}>{squares[17][11]}</button>
          <button className="square" id="17_12" onClick={()=>onSquare(17,12)}>{squares[17][12]}</button>
          <button className="square" id="17_13" onClick={()=>onSquare(17,13)}>{squares[17][13]}</button>
          <button className="square" id="17_14" onClick={()=>onSquare(17,14)}>{squares[17][14]}</button>
          <button className="square" id="17_15" onClick={()=>onSquare(17,15)}>{squares[17][15]}</button>
          <button className="square" id="17_16" onClick={()=>onSquare(17,16)}>{squares[17][16]}</button>
          <button className="square" id="17_17" onClick={()=>onSquare(17,17)}>{squares[17][17]}</button>
          <button className="square" id="17_18" onClick={()=>onSquare(17,18)}>{squares[17][18]}</button>
          </div>
          <div className="board-row">
          <button className="square" id="18_0" onClick={()=>onSquare(18,0)}>{squares[18][0]}</button>
          <button className="square" id="18_1" onClick={()=>onSquare(18,1)}>{squares[18][1]}</button>
          <button className="square" id="18_2" onClick={()=>onSquare(18,2)}>{squares[18][2]}</button>
          <button className="square" id="18_3" onClick={()=>onSquare(18,3)}>{squares[18][3]}</button>
          <button className="square" id="18_4" onClick={()=>onSquare(18,4)}>{squares[18][4]}</button>
          <button className="square" id="18_5" onClick={()=>onSquare(18,5)}>{squares[18][5]}</button>
          <button className="square" id="18_6" onClick={()=>onSquare(18,6)}>{squares[18][6]}</button>
          <button className="square" id="18_7" onClick={()=>onSquare(18,7)}>{squares[18][7]}</button>
          <button className="square" id="18_8" onClick={()=>onSquare(18,8)}>{squares[18][8]}</button>
          <button className="square" id="18_9" onClick={()=>onSquare(18,9)}>{squares[18][9]}</button>
          <button className="square" id="18_10" onClick={()=>onSquare(18,10)}>{squares[18][10]}</button>
          <button className="square" id="18_11" onClick={()=>onSquare(18,11)}>{squares[18][11]}</button>
          <button className="square" id="18_12" onClick={()=>onSquare(18,12)}>{squares[18][12]}</button>
          <button className="square" id="18_13" onClick={()=>onSquare(18,13)}>{squares[18][13]}</button>
          <button className="square" id="18_14" onClick={()=>onSquare(18,14)}>{squares[18][14]}</button>
          <button className="square" id="18_15" onClick={()=>onSquare(18,15)}>{squares[18][15]}</button>
          <button className="square" id="18_16" onClick={()=>onSquare(18,16)}>{squares[18][16]}</button>
          <button className="square" id="18_17" onClick={()=>onSquare(18,17)}>{squares[18][17]}</button>
          <button className="square" id="18_18" onClick={()=>onSquare(18,18)}>{squares[18][18]}</button>
          </div>


          <button onClick={onRestart}> Restart </button>
     </div>
)

export default Board
