import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { db } from "./firebase_config";

function TodoListItem({ todo, inprogress, id }) {
  const statusToggle = () => {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  };
  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        ></ListItemText>
      </ListItem>
      <Button onClick={statusToggle}>{inprogress ? "Done" : "UnDone"}</Button>
      <Button>X</Button>
    </div>
  );
}
export default TodoListItem;
