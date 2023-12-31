import { useState } from "react";
function App() {
  const [todo ,setTodo] = useState("");
  const [todos , setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onClick  = index => setTodos(todos.filter((_, todoIndex) => index !== todoIndex));
  // todos.filter는 인덱스와 골라진 인덱스번호와 같은 번호를 빼고 어레이를 출력하라
  const onSubmit = (event) => {
    event.preventDefault()
    if( todo === ""){
      return;      
    }
    setTodos(currentArray => [todo,...currentArray])
    setTodo("");
  }
  return (
    <div>
      <h1>My to do {todos.length}</h1>
      <form onSubmit={onSubmit}>
      <input 
      onChange={onChange} 
      value={todo} type="text" 
      placeholder="write todo list here"/>
      <button>Add Todo</button>
      </form>
      <hr />
      <ul>
      {todos.map((item, index) => 
      <li key={index}>{item} <button onClick={() => onClick(index)}>X</button></li>).reverse()}
      </ul>
    </div>
  );
}
export default App;