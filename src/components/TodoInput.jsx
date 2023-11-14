import { useState } from "react";

function TodoInput(props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <h1>Your todo title: {inputValue}</h1>

      <input
        value={inputValue}
        onKeyUp={(e) => {
          const char = e.key;
          const nextString = inputValue + char;
          setInputValue(nextString);
        }}
        type="text"
        placeholder="Write your todo..."
        id="title"
      />
      <button
        id="save-btn"
        onClick={(e) => {
          console.log(e);

          props.handleSubmit(inputValue);
          setInputValue("");
        }}
      >
        Save
      </button>
    </div>
  );
}

export default TodoInput;
