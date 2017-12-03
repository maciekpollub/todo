import React, {Component} from 'react'
import Mark from './Mark.js'

class Container extends Component {
    constructor(props){
        super(props);
        this.textChanged = this.textChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchChange = this.searchChange.bind(this);
        this.state = {
            query: '',
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
        event.preventDefault();//aby cała strona nie ładowała się za każdym razem
    }

    searchChange(event) {
        this.setState({query: event.target.value});
    }





    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text'
                           value={this.state.task}
                           placeholder='add task'
                           onChange={this.textChanged}/>
                    <input type='submit' value='Add' />
                </form>


                <h2>Find tasks </h2>
                <input type='text' placeholder='Search...' onChange={this.searchChange} />
                <h2>My tasks</h2>
                    {
                        this.state.tasks
                            .filter((task) => task.indexOf(this.state.query) !== -1)
                            .map((task,index) => (
                            <Mark key={index} label={task} />
                        ))
                    }
            </div>
        )
    }
}

export default Container;