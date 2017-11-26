import React, { Component } from 'react';

class Form extends Component {
    constructor(props){//chcemy zmieniac stany formularza...
        super(props);
        this.handleTitle = this.handleTitle.bind(this);
        this.state = {
            title: 'dfghd',
            content: 'dfghdfghd',
            category: 'books'
        };
    }

    handleTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    render() {
       return(
           <div>
               <h3>{this.state.title}</h3>
               <p>{this.state.content}</p>
               <p>Category: {this.state.category}</p>
               <form>
                   <label>
                       Name:
                       <input type='text' name='name' onChange={this.handleTitle} />//wprowadzamy nowy event
                   </label>
                   <input type='submit' value='Submit' />
               </form>
           </div>



       )
    }
}

export default Form;