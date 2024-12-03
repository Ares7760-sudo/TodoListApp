import React from 'react';
import './TodoList.scss';
import AddTodo from './AddTodo';

class TodoList extends React.Component {

    state = {
        todoList: [
            {id: 'todo1', content: 'Học đánh đàn bài "Trường làng em"'},
            {id: 'todo2', content: 'Học Aerobic ở sân banh'},
            {id: 'todo3', content: 'Học code Reactjs'}
        ],
        editTodo: ''
    }

    addTodo = (todo) => {
        this.setState({
            todoList: [...this.state.todoList, todo]
        })
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.todoList;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState(
            {
                todoList: currentTodos
            }
        );
    }

    handleEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.content = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let {todoList, editTodo} = this.state;
        let isEmptyEditTodoObj = Object.keys(editTodo).length === 0;

        return(
            <div className='todoList-container'>
                <AddTodo 
                    addTodo={this.addTodo}
                />
                <div className='todolist'>
                {
                    todoList.map((item, index) => {
                        return (
                            <div className='todo' key={item.id}>
                                { isEmptyEditTodoObj ? 
                                <span>{index+1} - {item.content}</span>
                                :
                                <>
                                    {item.id === editTodo.id ?
                                    <input type='text'
                                        value={editTodo.content}
                                        onChange={(event)=>this.handleOnChangeTodo(event)}
                                    />
                                    :
                                    <span>{index+1} - {item.content}</span>
                                    }
                                </>
                            }
                                <button
                                    onClick={()=>this.handleDeleteTodo(item)}
                                >Xóa</button>
                                <button
                                    onClick={()=>this.handleEditTodo(item)}
                                >Sửa</button>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default TodoList;