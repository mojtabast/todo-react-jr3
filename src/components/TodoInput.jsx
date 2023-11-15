import { useEffect, useState } from "react";

function TodoInput(props) {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const isDisabled = inputValue === "";

  useEffect(() => {
    const draft = localStorage.getItem("draft");
    setInputValue(draft);
  }, []);

  useEffect(() => {
    localStorage.setItem("draft", inputValue);
  }, [inputValue]);

  return (
    <div>
      <h1>Your todo title: {inputValue}</h1>
      <div>
        <div>{counter}</div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Increase
        </button>
      </div>

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
        disabled={isDisabled}
        onClick={(e) => {
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
