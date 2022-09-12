import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import TodoCompletedElement from "./TodoCompletedElement";
import TodoElement from "./TodoElement";

enum TodoItemStatus {
    PENDING = 'pending',
    COMPLETE = 'complete'
}

export interface TodoItem {
    task: string
    status: TodoItemStatus
}

export default function TodoList() {
    const [todoItems, setTodoItems] = useState<TodoItem[]>([])
    const [currentItem, setCurrentItem] = useState('')

    const addTodoItem = () => {
        setTodoItems([
            ...todoItems,{
                task: currentItem,
                status: TodoItemStatus.PENDING
            }
        ])
        setCurrentItem('')
    }

    const onTaskCompleted = (completedTask: string) => {
        setTodoItems(todoItems.map(item => completeItemCheck(item, completedTask)))
    }

    const completeItemCheck = (item: TodoItem, completedTask: string) => {
        if (item.task === completedTask) {
            item.status = TodoItemStatus.COMPLETE
        }
        return item
    }

    return (
        <div className="todo-list">
            <Grid item xs={8} md={4}>
                <Typography className="headerbox" sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Todo
                </Typography>
                {todoItems.map(item => {
                    if(item.status === TodoItemStatus.PENDING){
                        return <TodoElement key={item.task} item={item} onCompleted={onTaskCompleted}/>
                    }
                    return null
                })}
                <TextField size="medium" variant="filled" type="text" value={currentItem} onChange={(event => setCurrentItem(event.target.value))} />
                <Button size="large" variant="contained" onClick={addTodoItem}>Add task</Button> 
                <Typography className="headerbox" sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Completed Items
                </Typography>
                {todoItems.map(item => {
                    if(item.status === TodoItemStatus.COMPLETE){
                        return <TodoCompletedElement key={item.task} item={item}/>
                    }
                    return null
                })}
            </Grid>
        </div>
    )
}