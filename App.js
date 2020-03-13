import React from "react"
import ReactDOM from "react-dom"

import todoItemData from "./resources/todoItemData"
import TodoItem from "./TodoItem"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todoItemData: todoItemData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updated = prevState.todoItemData.map(todo => {
                if (todo.id === id) {
                    // "...prevItem" copies all the attributes of previous item into a new object
                    // and then we mutate the completed attribute on the copy object
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
            return { todoItemData: updated }
        })
    }

    render() {
        let todoItems = this.state.todoItemData.map(item =>
                        <TodoItem
                            key={item.id}
                            item={item}
                            handleChange={this.handleChange}/>
                    )

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App