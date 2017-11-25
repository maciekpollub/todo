import React, {Component} from 'react';


class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                'nauczyć się do testu',
                'zjeść śniadanie',
                'umyć okna'
            ]
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tasks: [
                    'Ala', 'ma', 'kota'
                ]
            });
        },5000);
        }

    }

    render()
        {
        return(
            <div>
                <h2>My to do list</h2>
                <ol>
                    {this.state.tasks.map((task, index) => {
                        return <li key={index}>{task}</li>
                    })}
                </ol>
            </div>
        );
    }


export default Todo;