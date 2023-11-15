import { useState } from "react";
import Todo from "./components/Todo";
import TodoInput from "./components/TodoInput";
import Actions from "./components/Actions";
import { get_todos_list } from "./api/todos";

export function App() {
  const [list, setList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const handle = (text) => {
    const todo = {
      title: text,
      status: false,
    };
    const nextList = [...list, todo];

    setList(nextList);
  };

  const toggleStatus = (title) => {
    const nextList = list.map((todo) => {
      if (todo.title === title) {
        return {
          title: todo.title,
          status: !todo.status,
        };
      }

      return todo;
    });

    setList(nextList);
  };

  const filteredList = list.filter((todo) => {
    if (currentFilter === "done") {
      return todo.status === true;
    } else if (currentFilter === "todo") {
      return todo.status === false;
    } else {
      return true;
    }
  });

  return (
    <div className="container">
      <div className="form">
        <TodoInput handleSubmit={handle} name="mojtaba" />
        <br />
        <br />
        <Actions
          handleFilter={setCurrentFilter}
          currentFilter={currentFilter}
          count={list.length}
        />
      </div>
      <div className="list">
        {filteredList.map((todo) => {
          return (
            <Todo
              title={todo.title}
              status={todo.status}
              handleCheck={toggleStatus}
            />
          );
        })}
      </div>
    </div>
  );
}
