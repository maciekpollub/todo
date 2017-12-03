import React, {Component} from 'react'


class Mark extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: false//checkbox na początku nie jest zaznaczony
        }
    }



    renderLabel() {
        if (this.state.checked) {
            return (
                <span style={{textDecoration: 'line-through'}}>
                    {this.props.label}
                </span>
                );
        }
        return this.props.label;
    }





    handleChange(event) {
        this.setState({checked: event.target.checked });
    }



    render() {
        return(
            <div>
                <input type='checkbox' onChange={this.handleChange}/>{this.props.label}
                {this.renderLabel()}
            </div>
        )
    }
}

export default Mark;