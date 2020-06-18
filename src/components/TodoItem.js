import React from 'react';
import ReactDOM from 'react-dom';

import './TodoItem.css';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBoxChecked: false,
            todoItemProps: props,
            count: 0
        };
    
        // for some reason, these components are either being rendered twice, or I created these in 2 places, or the constructor is firing twice. Probably not the latter.
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        //this.setState({isBoxChecked: event.target.value});
        this.setState({isBoxChecked: event.checked});   //either event.chcecked or event.target.value results in me having to double-click the checkbox.
        event.preventDefault(); //This doesn't stop checked from being undefined. And I have no idea how I made this into a controlled vs. uncontrolled component, cuz I still see the warning from time to time.

        this.setState((prevState) => {
            return {
                isBoxChecked: !prevState.isBoxChecked
            }
        });
    }

    //Example of using prevState:
    handleClick() {
        this.setState((prevState) => {
            return{
                count: prevState.count + 1      //don't increment prevState.count like this: prevState.count++. DO NOT MODIFY STATE DIRECTLY. You have to change/refresh the entire object.
            }
        });
    }

    render() {        
        return (
            <div className="TodoItem main-content-margin">
                <div>
                    <input type="checkbox" onChange={this.handleChange} checked={this.state.isBoxChecked ? true : false} />
                    <p>{this.state.todoItemProps.description === "" ? "Placeholder text here" : this.state.todoItemProps.description}</p> 
                </div>
            </div>
        );
    }
}

export default TodoItem;