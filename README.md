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



## 1. The Single Immutable State Tree
리덕스를 사용하면, 모든 state를 (간단하든 복잡하든) 하나의 거대한 JavaScript 객체로 표현하게 됨


간단한 카운터 -> 숫자 하나 <br>
여러개의 간단한 카운터 -> 숫자의 list <br>
ex) todoApp -> todos와 visibilityFilter를 필드로 가지는 객체 <br>
todos: todo의 리스트 (각 todo는 id, text, completed를 필드로 가지는 객체) <br>
visibilityFilter: SHOW_ALL or SHOW_COMPLETED or SHOW_ACTIVE <br>


First Principle of Redux: 애플리케이션에서 내에서 발생하는 모든 변화는 state(or statetree)라고 불리는 하나의 JavaScript 객체를 통해 관리된다<br>



## 2. Describing State Changes With Actions


Second Principle of Redux: Statetree는 Read-Only이며, 마음대로 수정할 수 없다. State를 수정하려면 action을 dispatch해야 한다<br>


action은 state의 change를 나타내는 JavaScript 객체임<br>
각 action 객체는 type 필드를 필수로 가짐(일반적으로 String 타입)<br>

todoList에서 todo를 하나 추가할 때마다,<br>
Component는 특정 id와 text와 type을 필드로 갖는 action을 dispatch하는 일을 수행함.

```
Component가 action을 dispatch 한다!
```



## 3. Pure and Impure Functions
Pure function: 인풋 인자에 아무 짓도 안함<br>
Impure function: 인풋 인자에 뭔 짓을 함<br>

```
Redux의 함수들은 Pure해야 한다!
```



## 4. The Reducer Function

Third Principle of Redux:<br>
reducer는 previous state와 dispatched action을 받아서 next state를 도출하는 함수. Pure function이기 때문에 인풋으로 받는 객체를 수정하는게 아니라 새로운 객체를 만들어서 리턴함. <br>



## 5. Writing a Counter Reducer with Tests

```js
//가장 기본적인 형태
function counter(state, action){    
    if(typeof state === 'undefined'){
        return 0;
    }
    //이상한 state를 받으면 initial 값을 리턴

    if(action.type === 'INCREMENT'){
        return state + 1;
    } else if(action.type === 'DECREMENT'){
        return state - 1;
    } else{
        return state;
    }
}


/*undefined state이 들어오는 case
=> 인풋 argument에 default 인자를 줌으로써 해려*/
function counter(state = 0, action){        
    if(action.type === 'INCREMENT'){
        return state + 1;
    } else if(action.type === 'DECREMENT'){
        return state - 1;
    } else{
        return state;
    }
    //함수 내부는 switch문을 쓰면 더 깔끔함
}


//이렇게 바꿔줄 수도 있음
const counter = (state = 0, action) => {        
    if(action.type === 'INCREMENT'){
        return state + 1;
    } else if(action.type === 'DECREMENT'){
        return state - 1;
    } else{
        return state;
    }
    //함수 내부는 switch문을 쓰면 더 깔끔함
}

```
