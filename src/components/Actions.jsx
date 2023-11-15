function Actions(props) {
  return (
    <div>
      <p>
        {props.currentFilter === "done" ? <b>it's done</b> : "it's not done"}
      </p>
      {props.count > 0 ? (
        <div>
          Delete checked items:
          <button className="delete-all">Delete all ({props.count})</button>
        </div>
      ) : null}
      <br />
      <br />
      Status:
      <select
        value={props.currentFilter}
        onChange={(e) => {
          const value = e.target.value;
          props.handleFilter(value);
        }}
      >
        <option value="all">All</option>
        <option value="todo">Todo</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
}

export default Actions;
