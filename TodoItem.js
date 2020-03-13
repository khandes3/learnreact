import React from "react"

function TodoItem (props) {
    return (
        <div className="todo-item">
            <label>
            <input type="checkbox"
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            ></input>
            {props.item.text}
            </label>
        </div>
    )
}

export default TodoItem