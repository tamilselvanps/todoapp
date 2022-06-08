import React from 'react'

import Todo from './Todo'
import styles from './Todos.module.css'
export default class Todos extends React.Component{
  
    render(){
        if(!this.props.tasksList.length){
            return <div>You don't have any pending tasks</div>
        }else{
            const todosList = this.props.tasksList
            return(
                <>
                    <div className={styles.todoWrapper}>Your Todos</div>
                    <div>
                    {todosList.map((toDo,index) => (
                        <Todo
                            index={toDo.id}
                            id={index}
                            task={toDo.task}
                            isCompleted={toDo.isCompleted}
                            onRemove={this.props.onRemoveItem}
                        />
                    ))}
                    </div>
                </>
            )
        }
    }
}