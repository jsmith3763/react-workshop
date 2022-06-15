import React from 'react';


class Button extends React.Component {
    render() {
        const handleButtonClick = () => { this.props.buttonClick() }
        return (
            <button onClick={handleButtonClick}>Back</button>
        )
    }
}

export default Button;