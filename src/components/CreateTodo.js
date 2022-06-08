import React from 'react'

import styles from './CreateTodo.module.css'

export default class CreateTodo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoValue : ''
        }
    }
    
    handleAddTodo = (e)=>{
        e.preventDefault();
        let list;
        if(this.state.todoValue === ''){
            return;
        }else{
            list = {task:this.state.todoValue,id:this.props.todos.length+1,isCompleted:false}
        }
        this.setState({todoValue:''})
        this.props.onTodoSubmit(list);
    }

    handleChangeTodo = (e) =>{
        this.setState({todoValue:e.target.value})
    }

    render(){
        return(
            <>
                <form onSubmit={this.handleAddTodo} className={styles.formWrapper}>
                    <input className={styles.addItemInput} type="text" placeholder='add item' onChange={this.handleChangeTodo} value={this.state.todoValue}/>
                    <button className={styles.addItem}>Add</button>
                </form>
            </>
        )
    }
}