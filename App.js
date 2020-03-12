import React from "react"
import ReactDOM from "react-dom"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            message: "State goes here"
        }
    }
    render() {
        return (
            <p>
                {this.state.message}
            </p>
        )
    }
}

export default App