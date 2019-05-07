import React from "react"

const completedStyle = {
    color: "#ccc",
    fontStyle: "italic",
    textDecoration: "line-through"
}

const TodoItem = (props) => (
    <form className="ToDoItem">
        <input type="checkbox" onChange={() => props.handleChange(props.item.id)} checked={props.item.completed}/>
        <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </form>
    )

export default TodoItem