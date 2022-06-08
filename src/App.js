import './App.css';
import React from 'react'

import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

export default class App extends React.Component {

  state = {
    todos : []
  }

  onAddItem =(todoObj)=>{
    this.setState({todos:[...this.state.todos,todoObj]})
  }

  onRemoveItem =(index)=>{
    const currItems = this.state.todos.filter((toDo)=>{
        return index !== toDo.id
    })
    this.setState({todos:currItems})
  }

  render(){
    return (
      <div className="App">
        <CreateTodo onTodoSubmit={this.onAddItem} todos={this.state.todos}/>
        <Todos tasksList={this.state.todos} onRemoveItem={this.onRemoveItem}/>
      </div>
    )
  }
}

