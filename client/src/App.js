import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

import './App.css';
import setAuthToken from './utils/setAuthToken'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState'
import CapeTown from './components/Capetown'
import Joburg from './components/Joburg'
import Durban from './components/Durban'
import Coming from './components/auth/Coming'
import Homep from './components/auth/Homep';
import Stel from './components/Stel'
import About from './components/About'
import Gallery from './components/Gallery'
import authContext from './context/auth/authContext';
import CommentState from './context/CommentState'
import PrivateRoute from './components/routing/PrivateRoute'
import Alerts from './components/Alerts'
const Logout = authContext;

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <CommentState>
         <Router>
         <Navbar/>       

         <Fragment>
              <div className='container'>
                <Alerts>
                  <Switch>
                    <Route exact path='/Gallery' component={Gallery} />
                    <Route exact path='/' component={Homep}/>
                    <Route exact path='/Homep' component={Homep} />
                    <Route exact path='/Register' component={Register} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path='/Login' component={Logout} />
                    <Route exact path='/Capetown' component={CapeTown} />
                    <Route exact path='/Joburg' component={Joburg} />
                    <Route exact path='/Durban' component={Durban} />
                    <Route exact path='/Stel' component={Stel} />
                    <Route exact path='/Coming' component={Coming} />
                  </Switch>
                </Alerts>
              </div>
            </Fragment>
          </Router>
        </CommentState>
      </AlertState> 
    </AuthState>

    
   
  );
}

export default App;
