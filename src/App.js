import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import UserContainer from './components/UserContainer'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/users">Search Users</Link>
        <Link to="/repos">Search Repos</Link>
      </div>
      <Route path="/users" component={UserContainer} />
        {/* <Route path="/repos" component={} /> */}
    </BrowserRouter>
  )
}

