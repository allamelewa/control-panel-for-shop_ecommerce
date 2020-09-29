import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Add from './components/pages/add_page/add';
import Show from './components/pages/show_page/show';
import Modify from './components/pages/modify_page/modify';
import Delete from './components/pages/delete_page/delete'
import Navbar from './components/navbar/navbar';
function App() {
  return (
    <Router className='app' >
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Add}/>
        <Route path='/show' component={Show}/>
        <Route path='/modify' component={Modify}/>
        <Route path='/delete' component={Delete}/>
      </Switch>
    </Router>
  );
}

export default App;
