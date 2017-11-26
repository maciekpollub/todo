import React, { Component } from 'react';

class Search extends Component {
    constructor(props){
        super(props);
        this.handleSearch = this.handleFormSearch.bind(this);
    }

    handleFormSearch(event){
        console.log('Wartość search: ' + this.ksiezniczka.value);
        event.preventDefault();
    }

    render() {
        return(
                <form onSubmit={this.handleSearch}>
                    <div>
                        <input type='text' ref={(field) => this.ksiezniczka = field} />{/*reactowa referencja do danego obiektu w dom-ie*/}
                    </div>
                    <div>
                        <input type='submit' value='Search'  />
                    </div>


                </form>
        )
    }
}

export default Search;