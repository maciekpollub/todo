import React, {Component} from 'react'

class Users extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
        this.state = {//stan musi być obiektem!!!
            loading: false,//dołączamy własciwość sprawdzająca czy dane się załadowały...
            users: [{
                name: 'Janusz'
            }, {
                name: 'Jola'
            }, {
                name: 'Danuta'
            }]
        }
    }

//poniższa funkcja pokazuje jak korzystać z asynchroniczności przy użyciu fetch:
    fetchData(){//skorzytamu z wbudowanego polecenia fetch, które pobierze dane z serwera ze strony o zadanym url-u
        this.setState({loading: true});//po nacisnięciu buttona,  przez czas ładowania się danych z serwera, ma się
        // wyświetlać na czerwono informacja Loading,,,,
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({loading: false, users: data});//gdy dane są załadowane to Loading.. ma znów zniknąc
            });
    }



    renderIndicator() {
        if (this.state.loading) {
            return <div style={{color: 'red', fontSize: 16}}>Loading...</div>;
        }
    }



    render() {
        return(
            <div>
                {this.renderIndicator()}
                <button onClick={this.fetchData}>Pobierz dane</button>
                <h1>Users</h1>
                {this.state.users.map((user, index) => (
                    <div key={index}>Imię: {user.name}, Email: {user.email}</div>
                ))}
            </div>
        );
    }
}

export default Users;