import React from 'react'

import styles from './Todo.module.css'
export default class Todo extends React.Component{

    handleRemoveItem = (index) =>{
        this.props.onRemove(index)
    }

    render(){
        console.log(this.props)
        return(
            <>
                <div className="todo-item" key={this.props.index} id={this.props.index}><span>{this.props.id+1}. {this.props.task}</span><span  onClick={()=>this.handleRemoveItem(this.props.index)} className={styles.todoItem}>Remove</span></div>
            </>
        )
    }
}