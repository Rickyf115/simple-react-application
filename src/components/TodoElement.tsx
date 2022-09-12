import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { TodoItem } from "./todoList";

interface TodoElementProps {
    item: TodoItem
    onCompleted: (task: string) => void
}

export default function TodoElement({item, onCompleted}: TodoElementProps){
    return (
        <ListItem className="item">
            <ListItemText
                primary={item.task}
            />
            <IconButton onClick={() => onCompleted(item.task)} edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </ListItem>
    )
}