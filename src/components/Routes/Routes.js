import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signin from '../Form/Signin/Signin';
import Register from '../Form/Register/Register';
import Home from '../Pages/Home';

const Routes = (props) => {
	return (
		<div>
			<Route path='/react_todo/signin' render={() => {
        if (window.localStorage.getItem('token') === null) {
          return <Signin />
        } else {
          return <Redirect to='/' />
        }
      }} />
      <Route path='/react_todo/register' render={() => {
        if (window.localStorage.getItem('token') === null) {
          return <Register />
        } else {
          return <Redirect to='/' />
        }
      }} />
      <Route exact path='/react_todo/' render={() => {
        if (window.localStorage.getItem('token') !== null) {
          return <Home />
        } else {
          return <Redirect to='/signin' />
        }
      }} />
		</div>
	)
}

export default Routes;
