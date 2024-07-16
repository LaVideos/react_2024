import React, {FC} from 'react';
import {ITodo} from "../../types/ITodo";

interface TodoType{
    todo:ITodo
}


const TodoComponent:FC<TodoType> = ({todo}) => {
    return (
        <div style={{margin:"20px"}}>
            <>{todo.title} : {String(todo.completed)}</>
            </div>
    );
};

export default TodoComponent;
