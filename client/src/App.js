import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

import './App.css';
import setAuthToken from './utils/setAuthToken'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState'
<<<<<<< HEAD
import CapeTown from './components/Capetown'
=======
import Blog from './components/Blog'
import CapeTown from './components/Cape-town'
>>>>>>> a321560068ff89c9962af27e094983f2fbd45a1d
import Joburg from './components/Joburg'
import Durban from './components/Durban'
import Coming from './components/Coming'
import Homep from './components/auth/Homep';
import Stel from './components/Stel'
import About from './components/About'
import Gallery from './components/Gallery'
import authContext from './context/auth/authContext';
import CommentState from './context/CommentState'
import PrivateRoute from './components/routing/PrivateRoute'

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

         <Fragment style={{ backGroundImage:'url(https://www.godfatherstyle.com/wp-content/uploads/2016/03/beautiful-nature-beach-sunset-wallpaper-2.-1.jpg'}}>
              <div className='container'>
                <Switch>
                  <PrivateRoute exact path='/Gallery' component={Gallery} />
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
              </div>
            </Fragment>
          </Router>
        </CommentState>
      </AlertState> 
    </AuthState>

    
   
  );
}

export default App;
