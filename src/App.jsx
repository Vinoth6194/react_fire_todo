import "./App.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useEffect, useState } from "react";
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./TodoListItem";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    console.log("Button is clicked");
    console.log(`You aretrying to add`);
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  };

  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((querySnapshot) => {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
          }))
        );
      });
  };
  return (
    <div className="App">
      <h1>Vinothkumar's Todo App 🔥 🔥 </h1>
      <form>
        <TextField
          className="text_field"
          id="standard-basic"
          label="Vin's Todo"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
            console.log(`Value is ${e.target.value}`);
          }}
        />
        <Button
          style={{ display: "none" }}
          className="btn_hide"
          variant="contained"
          color="primary"
          onClick={addTodo}
          type="submit"
        >
          Primary
        </Button>
      </form>
      <div className="app__todos">
        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            id={todo.id}
            inprogress={todo.inprogress}
          ></TodoListItem>
        ))}
      </div>
    </div>
  );
}

export default App;
