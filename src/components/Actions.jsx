function Actions() {
  return (
    <div>
      Delete checked items:
      <button className="delete-all">Delete all</button>
      <br />
      <br />
      Status:
      <select>
        <option value="done">Done</option>
        <option value="todo">Todo</option>
        <option value="all">All</option>
      </select>
    </div>
  );
}

export default Actions;
