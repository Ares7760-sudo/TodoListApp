import React from 'react';
import './TodoList.scss';
import AddTodo from './AddTodo';

class TodoList extends React.Component {
    constructor() {
        super();
        let initTodoList = JSON.parse(localStorage.getItem("todoList"));

        if(!initTodoList) {
            initTodoList = [
                { id: '1', content: 'Giữ gìn sức khỏe'},
                { id: '2', content: 'Học Aerobic ở sân banh'}
            ]
            localStorage.setItem("todoList", JSON.stringify(initTodoList));
        }

        this.state = {
            todoList: initTodoList,
            editTodo: ''
        }
        
    }

    addTodo = (todo) => {
        let currentTodoList = [...this.state.todoList, todo];
        this.setState({
            todoList: currentTodoList
        })
        
        if(currentTodoList) {
            localStorage.setItem("todoList", JSON.stringify(currentTodoList));
        } 
    }

    handleDeleteTodo = (todo) => {
        let currentTodoList = this.state.todoList;
        currentTodoList = currentTodoList.filter(item => item.id !== todo.id);
        this.setState(
            {
                todoList: currentTodoList
            }
        );
        if(currentTodoList) {
            localStorage.setItem("todoList", JSON.stringify(currentTodoList));
        } 
    }

    handleEditTodo = (todo) => {
        let {editTodo, todoList} = this.state;
        let isEmptyEditTodoObj = Object.keys(editTodo).length === 0;

        // Save
        if (isEmptyEditTodoObj === false && editTodo.id === todo.id) {
            let todoListCopy = [...todoList];
            let objIndex = todoListCopy.findIndex((item => item.id === todo.id));
            todoListCopy[objIndex].content = editTodo.content;

            this.setState({
                todoList: todoListCopy,
                editTodo: ''
            });
            localStorage.setItem("todoList", JSON.stringify(todoListCopy));
            return;
        } 
        // Edit
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

    componentDidMount(){
        //let currentTodoList = new Map(Object.entries(JSON.parse(localStorage.getItem("todoList"))));
        let currentTodoList = JSON.parse(localStorage.getItem("todoList"));
        this.setState({
            todoList: currentTodoList
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
                                >
                                { isEmptyEditTodoObj === false && editTodo.id === item.id ?
                                    'Lưu thay đổi' : 'Sửa'
                                }
                                </button>
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