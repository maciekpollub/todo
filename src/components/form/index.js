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
        this.handleTextArea = this.handleTextArea.bind(this);//dodajemy zdarzenie : obsługa textarea...
        this.state = {
            textarea: 'sth inside...'
        };

    }

    handleTitle(event) {
        this.setState({
            title: event.target.value

        });
    }

    handleTextArea(event) {
        this.setState({
            textarea: event.target.value
        });
    }

    render() {
       return(
           <div>
               <h3>{this.state.textarea}</h3>
               <h3>{this.state.title}</h3>
               <p>{this.state.content}</p>
               <p>Category: {this.state.category}</p>
               <form>
                   <label>
                       Name:
                       <input type='text' name='name' onChange={this.handleTitle} />//wprowadzamy nowy event
                   </label>
                   <input type='submit' value='Submit' />
                   <textarea onChange={this.handleTextArea}/>
                   <select>
                       <option>Opcja1</option>
                       <option>Opcja2</option>
                       <option>Opcja3</option>
                   </select>
               </form>
           </div>



       )
    }
}

export default Form;