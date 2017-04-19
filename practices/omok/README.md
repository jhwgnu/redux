# Redux Counter Example

리듀서는 이전 상태와 액션을 받아서 다음 상태를 반환하는 함수 <br>

바깥 index.js의 첫 줄에서 counter의 상태 정보를 저장하는
store를 생성하며, 그 store는 리듀서와 연결
state의 값은 store에 모두 저장 <br>

바깥 index.js에서는 그 state 값을 읽어서 컴포넌트로 전달해줌
컴포넌트는 값을 보여주는 틀일 뿐

컴포넌트에서 +버튼을 누르면?
(+버튼과 연결된 함수는 바깥 index에서  정의됨)
함수를 호출한 counter 객체의 state와 그 함수와 연결된 action의
타입이 reducer로 전달됨

reducer에서는 store에 저장돼있는 현재 state와 전달 받은
action 타입을 바탕으로 store의 state을 업데이트함

<Question1>
그런데 이 때 state는 여러 개의 필드를 포함할 수 있는지?
state은 어떻게 정의하는 것인지?
ex) Counter에서는 그냥 정수값
ex) TodoList에서는 배열
ex) 오목에서 squares, xIsNext, winner

<Question2>

<Question3>
Game->Board->Square로 onClick함수 없이
squares만 전달하면 되는건가?
원래는(튜토리얼 삼목) Game내에 정의된 handleClick 함수를
onClick property형식으로 Game->Board로, Board->Square로
전달해서 Square의 value를 바꿨음

squares만 전달하는 방식으로 바꿔보자
