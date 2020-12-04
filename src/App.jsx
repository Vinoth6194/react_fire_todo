import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const addTodo = (e) => {
    e.preventDefault();
    console.log("Button is clicked");
    console.log(`You aretrying to add`);
  };
  return (
    <div className="App">
      <h1>Vinothkumar's Todo App 🔥 🔥 </h1>
      <form>
        <TextField
          id="standard-basic"
          label="Vin's Todo"
          className="todo_field"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
            console.log(`Value is ${e.target.value}`);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          type="submit"
        >
          Primary
        </Button>
      </form>
    </div>
  );
}

export default App;
