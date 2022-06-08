import './App.css';
import React from 'react'

import TodoClassState from './pages/TodoClassState';
import TodoWithRedux from './pages/TodoWithRedux';

import { BrowserRouter, Route, Routes } from "react-router-dom";


export default class App extends React.Component {

  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<TodoClassState />} />
            <Route path="/redux" element={<TodoWithRedux />} />
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

