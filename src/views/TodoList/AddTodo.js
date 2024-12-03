import React from 'react';

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
                <input type="text"
                    value={content}
                    onChange={(event)=>this.handleOnChangeTodoContent(event)}
                ></input>
                <button className='add'
                    onClick={()=>this.handleAddNewTodo()}
                >Thêm</button>
            </div>
        )
    }
}

export default AddTodo;