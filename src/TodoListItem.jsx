import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { db } from "./firebase_config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoListItem({ todo, inprogress, id }) {
  const statusToggle = () => {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  };
  const delToaster = () => {
    toast.warn("Todo Deleted ", {
      position: "top-right",
      autoClose: 5000,
      draggable: true,
    });
  };
  const deleteTodo = () => {
    db.collection("todos").doc(id).delete();
    delToaster();
  };
  return (
    <div style={{ display: "flex" }}>
      <ToastContainer></ToastContainer>

      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        ></ListItemText>
      </ListItem>
      <Button onClick={statusToggle}>{inprogress ? "Done" : "UnDone"}</Button>
      <Button onClick={deleteTodo}>X</Button>
    </div>
  );
}
export default TodoListItem;
