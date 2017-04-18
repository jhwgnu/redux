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


## [1. Redux: The Single Immutable State Tree](https://egghead.io/lessons/javascript-redux-the-single-immutable-state-tree)
리덕스를 사용하면, 모든 state를 (간단하든 복잡하든) 하나의 거대한 JavaScript 객체로 표현하게 됨


간단한 카운터 -> 숫자 하나 <br>
여러개의 간단한 카운터 -> 숫자의 list <br>
ex) todoApp -> todos와 visibilityFilter를 필드로 가지는 객체 <br>
todos: todo의 리스트 (각 todo는 id, text, completed를 필드로 가지는 객체) <br>
visibilityFilter: SHOW_ALL or SHOW_COMPLETED or SHOW_ACTIVE <br>


```
First Principle of Redux: 애플리케이션에서 내에서 발생하는 모든 변화는 state(or statetree)라고 불리는 하나의 JavaScript 객체를 통해 관리된다
```

## [2. Redux: Describing State Changes With Actions](https://egghead.io/lessons/javascript-redux-describing-state-changes-with-actions)

```
Second Principle of Redux: Statetree는 Read-Only이며, 마음대로 수정할 수 없다. State를 수정하려면 action을 dispatch해야 한다.
```

action은 state의 change를 나타내는 JavaScript 객체임<br>
각 action 객체는 type 필드를 필수로 가짐(일반적으로 String 타입)<br>

todoList에서 todo를 하나 추가할 때마다,<br>
Component는 특정 id와 text와 type을 필드로 갖는 action을 dispatch하는 일을 수행함.

```
Component가 action을 dispatch 한다!
```


## [3. Redux: Pure and Impure Functions](https://egghead.io/lessons/javascript-redux-pure-and-impure-functions)
Pure function: 인풋 인자에 아무 짓도 안함<br>
Impure function: 인풋 인자에 뭔 짓을 함<br>

```
Redux의 함수들은 Pure해야 한다!
```


## [4. Redux: The Reducer Function](https://egghead.io/lessons/javascript-redux-the-reducer-function)
