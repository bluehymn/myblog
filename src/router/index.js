import React from 'react'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import interceptor from './interceptor'

import Home from '../components/Home'
import Login from '../components/User/Login/login'
import Signup from '../components/User/Signup/signup'
import AddArticle from '../components/Admin/Article/Add/add'

const RouterConfig = () => (
  <BrowserRouter getUserConfirmation={interceptor}>
    <div>
      <Route path="/" exact component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/admin/article/add" component={AddArticle}/>
    </div>
  </BrowserRouter>
)

export default RouterConfig
