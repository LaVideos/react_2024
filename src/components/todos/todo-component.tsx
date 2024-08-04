import React, {FC} from 'react';
import {ITodo} from "../../types/ITodo";


type TodoType = {
    todo:ITodo
}


const TodoComponent:FC<TodoType> = ({todo}) => {
    return (
        <div>
            <div>{todo.title} : {String(todo.completed)}</div>
            <hr/>
        </div>
    );
};

export default TodoComponent;
