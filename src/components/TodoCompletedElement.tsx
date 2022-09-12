import { ListItem, ListItemText } from "@mui/material";
import { TodoItem } from "./todoList";

interface TodoElementProps {
    item: TodoItem
}

export default function TodoCompletedElement({item}: TodoElementProps){
    return (
        <ListItem className="item">
            <ListItemText
                primary={item.task}
            />
        </ListItem>
    )
}