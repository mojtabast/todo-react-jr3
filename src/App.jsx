import { useState } from "react";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";
import Actions from "./components/Actions";

export function App() {
  const [list, setList] = useState([]);

  const handle = (text) => {
    const todo = {
      title: text,
      status: false,
    };
    const nextList = [...list, todo];
    console.log("handle: ", list, nextList);

    setList(nextList);
  };

  return (
    <div className="container">
      <div className="form">
        <TodoInput handleSubmit={handle} name="mojtaba" />
        <br />
        <br />
        <Actions />
      </div>
      <div className="list">
        {list.map((todo) => {
          return <Todo title={todo.title} status={todo.status} />;
        })}
      </div>
    </div>
  );
}
