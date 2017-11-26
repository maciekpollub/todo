import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Button from './button/index';

class Header extends Component {
    render() {
        return(
            <div>
                <h1>App Header</h1>
                <Button label='ok!'/>
                <ul>
                    <li><Link to='/'>Dashboard</Link></li>
                    <li><Link to='/todo'>To Do</Link></li>
                    <li><Link to='/counter'>Counter</Link></li>
                </ul>
            </div>

        )
    }
}

export default Header;