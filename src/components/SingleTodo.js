import React from 'react'

class SingleTodo extends React.Component {
    render() {

        return (
            <>
                <h2>{this.props.singleTodo}</h2>
            </>
        )
    }
}

export default SingleTodo