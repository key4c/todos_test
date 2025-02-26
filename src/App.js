import todos from "./todos";
import TodoList from "./TodoList";

export default function App() {
  console.log(todos);
  const setDone = (key) => {
    const deed = todos.find((el) => el.key === key);
    if (deed) deed.done = true;
  };
  return (
    <div className="container">
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <span className="navbar-item is-uppercase">todos</span>
        </div>
      </nav>
      <main className="content px-6 py-6">
        <TodoList list={todos} />
      </main>
    </div>
  );
}
