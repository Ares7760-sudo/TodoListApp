import React from 'react';
import './TodoList.scss';
import AddTodo from './AddTodo';
import { toast} from 'react-toastify';

class TodoList extends React.Component {

    state = {
        todoList: [
            {id: 'todo1', content: 'Học đánh đàn bài "Trường làng em"'},
            {id: 'todo2', content: 'Học Aerobic ở sân banh'},
            {id: 'todo3', content: 'Học code Reactjs'}
        ]
    }

    addTodo = (todo) => {
        this.setState({
            todoList: [...this.state.todoList, todo]
        })

        toast.success("Đã thêm");
    }

    render() {
        let {todoList} = this.state;
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
                                <span>{item.content}</span>
                                <button>Xóa</button>
                                <button>Sửa</button>
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