import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import actions from './reducers'
//actions가 아니라 아무 이름이나 들어가도 상관 없음

//reducers의 액션들을 받아들이는 store 생성
const store = createStore(actions)

//Counter 객체 생성해서 띄워줌
const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    //dispatch(action)을 통해 state을 수정할 수 있음
  />,
  document.getElementById('root')
)

render()
store.subscribe(render)
//이 render를 통해 만들어진 컴포넌트를 store의 listener가 되도록 함
