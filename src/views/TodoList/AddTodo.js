import React from 'react';
import {toast} from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        content : ''
    }

    handleOnChangeTodoContent = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleAddNewTodo = () => {
        if(this.state.content === '') {
            toast.error("Bạn cần phải nhập nội dung");
            return;
        }

        let newTodo = {
            id: Math.floor(Math.random()*1000),
            content: this.state.content
        }

        this.props.addTodo(newTodo);

        this.setState({
            content: ''
        })
    }

    render() {
        let {content} = this.state;
        return(
            <div className='add-todo'>
                <div className='row'>
                    <div className='mb-3 mt-3 col-9'>
                        <input type="text" class="form-control"
                            value={content}
                            onChange={(event)=>this.handleOnChangeTodoContent(event)}
                        ></input>
                    </div>
                    <div className='mb-3 mt-3 col-3'>
                    <button type="button" className='add btn btn-primary'
                        onClick={()=>this.handleAddNewTodo()}
                    >Thêm</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo;