import React from 'react'
import TodoItem from './TodoItem'

class Todos extends React.Component {
    render() {
        return (
            this.props.todos.map((elem) => {
                return <TodoItem elem={elem} key={elem.id} setSingleTodo={this.props.setSingleTodo} />
            })
        )
    }
}

export default Todos