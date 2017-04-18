<Basic Setting>
react 설치 후

```
git clone https://github.com/reactjs/redux
cd redux/examples/counter
npm install
npm start
```

리액트 설치했으면 소스 폴더 다운받아서 돌리기만 하면 됨


>**Redux 인강:**  
>**[Part 1: Getting Started with Redux](https://egghead.io/series/getting-started-with-redux) (30 free videos)**<br>
>**[Part 2: Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) (27 free videos)**


### [1. Redux: The Single Immutable State Tree](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree)
리덕스를 사용하면, 모든 state를 (간단하든 복잡하든) 하나의 거대한 JavaScript 객체로 표현하게 됨
ex) 간단한 카운터 -> 숫자 하나
ex) 여러개의 간단한 카운터 -> 숫자의 list
ex) todoApp -> todos와 visibilityFilter를 필드로 가지는 객체
todos: todo의 리스트 (각 todo는 id, text, completed를 필드로 가지는 객체)
visibilityFilter: SHOW_ALL or SHOW_COMPLETED or SHOW_ACTIVE

```
First Principle of Redux: 애플리케이션에서 내에서 발생하는 모든 변화는 state(or statetree)라고 불리는 하나의 JavaScript 객체를 통해 관리된다
```
