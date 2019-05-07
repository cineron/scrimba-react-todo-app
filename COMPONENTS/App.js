import React from "react";
import TodoItem from "./TodoItem";
import todosData from "../FIXTURES/todosData.js"


class App extends React.Component {
    constructor(){
        super()
        this.state = {todos: todosData}
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {todo.completed = !todo.completed }
            return todo
            })
        return { todos : updatedTodos }
        })
        // console.log("changed",id)
    }
    render(){
        const todoItems = this.state.todos.map(item => 
        <TodoItem 
        handleChange={this.handleChange}
        key={item.id}
        item={item}/>
        );
        return (  
            <div className="ToDoList">
                {todoItems}
            </div>
        )
    }
}

export default App; 