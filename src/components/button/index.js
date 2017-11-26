import React, { Component } from 'react';

import './index.css';//importujemy style z zewnątrz , z folderu daneg komponentu- tak jest lepiej...

class Button extends Component {
    render() {
        const buttonStyle = {
            backgroundColor: 'green',
            color: 'yellow',
            fontSize: 40
        };
        return(
            <div className="btn-container">
                <button style = {buttonStyle}>{this.props.label}</button>
            </div>
        )
    }
}

export default Button;