import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='navbar'>
                <ul>
                    <li><Link className='link' to='/'>Add Product</Link></li>
                    <li><Link className='link' to='show'>Show Product</Link></li>
                    <li><Link className='link' to='modify'>Modify Product</Link></li>
                    <li><Link className='link' to='delete'>delete Product</Link></li>
                </ul>
            </div>
         );
    }
}
 
export default Navbar;