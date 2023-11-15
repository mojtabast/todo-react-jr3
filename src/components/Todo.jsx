function Todo(props) {
  return (
    <div className="todo">
      <input
        type="checkbox"
        checked={props.status}
        onClick={() => {
          props.handleCheck(props.title);
        }}
      />
      <span>{props.title}</span>
      <button className="delete">Delete</button>
    </div>
  );
}

export default Todo;
