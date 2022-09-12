import React from 'react';

var todoItems = new Array()
var doneItems = new Array()
var emptyContent : JSX.Element[] = []

export default class TodoList extends React.Component<{}, {todoContent: JSX.Element[], doneContent: JSX.Element[]}> {
    constructor(props: any) {
        super(props)
        this.state = { todoContent: this.renderItems(), doneContent: this.renderDone() }
        this.addTodoItem = this.addTodoItem.bind(this)
    }
    
    addTodoItem() {
        var item = prompt("What do you need to do?", "Write a todolist in react")
        todoItems.push(item)
        console.log(todoItems)
        // Clean things up cause I think Im dumb
        this.setState({
            todoContent: this.renderItems(),
            doneContent: this.renderDone()
        })
    }

    removeTodoItem(value: string) {
        var index = todoItems.indexOf(value)
        if (index > -1) { // only splice array when item is found
            todoItems.splice(index, 1); // 2nd parameter means remove one item only
        }
        doneItems.push(value)
        console.log("done items: " + doneItems)
        this.setState({
            todoContent: this.renderItems(),
            doneContent: this.renderDone()
        })
    }

    renderItems() {
        return (
            todoItems.map(item => 
                <li>{item} <button onClick={() => this.removeTodoItem(item)}>Complete</button></li>    
            )
        )
    }

    renderDone() {
        return (
            doneItems.map(item => 
                <li>{item}</li>    
            )
        )
    }

    render() {
        return (
            <div className="todo-list">
                <h2>Todo List</h2>
                <button onClick={this.addTodoItem}>Add Item</button>
                <ul>{this.state.todoContent}</ul>
                <h2>Done List</h2>
                <ul>{this.state.doneContent}</ul>
            </div>
        )
    }
  }
