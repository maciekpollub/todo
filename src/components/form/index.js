import React, { Component } from 'react';

class Form extends Component {
    constructor(props){//chcemy zmieniac stany formularza...
        super(props);
        this.handleTitle = this.handleFormTitle.bind(this);
        this.state = {
            title: 'dfghd',
            category: 'books'

        };
        this.handleContent = this.handleFormContent.bind(this);//dodajemy zdarzenie : obsługa textarea...
        this.state = {
            content: 'sth inside...'
        };

    }

    handleFormTitle(event) {
        this.setState({
            title: event.target.value

        });
    }

    handleFormContent(event) {
        this.setState({
            content: event.target.value
        });
    }

    render() {
       return(
           <div>
               <h3>{this.state.content}</h3>
               <h3>{(this.state.title !== '') ? 'promocja!  ' + this.state.title : ''}</h3>
               <p>Category: {this.state.category}</p>
               <form>
                   <label>
                       Name:
                       <input type='text' name='name' onChange={this.handleTitle} />//wprowadzamy nowy event
                   </label>
                   <input type='submit' value='Submit' />
                   <textarea onChange={this.handleContent}/>
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