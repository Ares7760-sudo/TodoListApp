import React from 'react';
import './TodoList.scss';

class TodoList extends React.Component {

    render() {
        return(
            <div className='todoList-container'>
                <div className='add-todo'>
                    <input type="text"></input>
                    <button className='add'>Thêm</button>
                </div>
                <div className='todolist'>
                    <div className='todo'>
                        <span>Học đánh đàn bài "Trường làng em"</span>
                        <button>Xóa</button>
                        <button>Sửa</button>
                    </div>
                    <div className='todo'>
                        <span>Học Aerobic ở sân banh</span>
                        <button>Xóa</button>
                        <button>Sửa</button>
                    </div>
                    <div className='todo'>
                        <span>Học code Reactjs</span>
                        <button className='delete'>Xóa</button>
                        <button className='edit'>Sửa</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;