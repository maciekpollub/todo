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
        this.handleSubmit = this.handleFormSubmit.bind(this);
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

    handleFormSubmit(event) {
        console.log(this.state);
        event.preventDefault();//zeby przy wysyłce forma strona nie ładowała sie od nowa...
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
                   <div>
                       <textarea onChange={this.handleContent}/>
                   </div>
                   <select>
                       <option>Opcja1</option>
                       <option>Opcja2</option>
                       <option>Opcja3</option>
                   </select>
                   <div>
                       <input type='sumbit' value='wyślij mnie proszę...'/>
                   </div>

               </form>
           </div>



       )
    }
}

export default Form;