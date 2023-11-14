function Todo(props) {
  return (
    <div className="todo">
      <input type="checkbox" checked={props.status} />
      <span>{props.title}</span>
      <button className="delete">Delete</button>
    </div>
  );
}

export default Todo;
