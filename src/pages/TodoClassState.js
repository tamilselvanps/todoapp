import React from "react";

import CreateTodo from './../components/CreateTodo'
import Todos from './../components/Todos'

class TodoClassState extends React.Component {
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
        <div>
            <CreateTodo onTodoSubmit={this.onAddItem} todos={this.state.todos}/>
            <Todos tasksList={this.state.todos} onRemoveItem={this.onRemoveItem}/>
        </div>
        )
    }
}

export default TodoClassState;