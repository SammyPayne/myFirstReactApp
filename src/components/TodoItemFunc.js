import React from 'react';

import './TodoItemFunc.css';

function TodoItemFunc(props) {
    return (
        <div className="TodoItemFunc main-content-margin">
            <div>
                <input type="checkbox" 
                    onChange={(event) => props.handleChange(props.item.id)} 
                    checked={props.item.isComplete} />
                <p>{props.item.description === "" ? "Placeholder text here" : props.item.description}</p>
            </div>
        </div>
    );
}

export default TodoItemFunc;