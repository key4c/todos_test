import todos from "./todos";
import TodoList from "./TodoList";
import { useState } from "react";
import initialTodos from "./todos";

export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  const setDone = (key) => {
    const newTodos = [...todos];
    const deed = newTodos.find((el) => el.key === key);
    if (deed) deed.done = true;
    setTodos(newTodos);
  };
  const del = (key) => {
    const newTodos = todos.filter((el) => el.key !== key);
    setTodos(newTodos);
  };
  return (
    <div className="container">
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <span className="navbar-item is-uppercase">todos</span>
        </div>
      </nav>
      <main className="content px-6 py-6">
        <TodoList list={todos} setDone={setDone} del={del} />
      </main>
    </div>
  );
}
