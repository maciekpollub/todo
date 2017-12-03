import React, {Component} from 'react'

class Container extends Component {
    constructor(props){
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            task: '',//to co wklepujemy jako nowe zadanie...
            tasks: []
        };
    }


    textChanged(event) {
        this.setState({task: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: ''
        });
        event.preventDefault();
    }





    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='add task' onChange={this.textChanged}/>
                    <input type='submit' value='Add' />
                </form>

            <h2>My tasks</h2>
                {
                    this.state.tasks.map((task,index) => (
                        <div key={index}>{task}</div>
                    ))
                }
            </div>
        )
    }
}

export default Container;