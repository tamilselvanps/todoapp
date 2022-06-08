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
                <div key={this.props.index} id={this.props.index}><span>{this.props.task}</span><span  onClick={()=>this.handleRemoveItem(this.props.index)} className={styles.todoItem}>Remove</span></div>
            </>
        )
    }
}