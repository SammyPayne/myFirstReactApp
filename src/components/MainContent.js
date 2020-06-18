import React from 'react';
import ReactDOM from 'react-dom';
import MyInfo from './MyInfo';
import TodoItem from './TodoItem';
import TodoItemFunc from './TodoItemFunc';

import './MainContent.css';
import todoList from '../data/TodoItemsMockData.js';

// on 6.10.20, I had to change this from a functional component to a class-based component.

class MainContent extends React.Component {
    constructor() {
        super();

        const todoListComponents = todoList.map((item) => {
            return(
                <TodoItemFunc item={item} handleChange={this.handleChange} />
            );
        });

        this.state = {
            todoListComponents: todoListComponents
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (id) => {
        console.log("Changed: ", id);
        //this is being skipped over entirely when I use an arrow function
        this.setState(prevState => {
            const updatedTodos = prevState.todoListComponents.map(todo => {
                if (todo.id === id) {
                    todo.isComplete = !todo.isComplete;
                    console.log("todo changed: " + todo.id.toString());
                }

                return todo;
            });
            return {
                todoListComponents: updatedTodos
            }
        });
    }

    render() {
        return (
            // I omitted ListOfThree because it's garbage taking up space right now.
            <div className="MainContent">
                <MyInfo />
                {this.state.todoListComponents}
            </div>
        );
    }
}

export default MainContent