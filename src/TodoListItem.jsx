import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

function TodoListItem({ todo, inprogress, id }) {
  return (
    <div style={{ display: "flex" }}>
      <ListItem>
        <ListItemText
          primary={todo}
          secondary={inprogress ? "In Progress" : "Completed"}
        ></ListItemText>
      </ListItem>
      <Button>Done</Button>
      <Button>X</Button>
    </div>
  );
}
export default TodoListItem;
