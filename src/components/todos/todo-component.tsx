import React, {FC} from 'react';
import {ITodo} from "../../types/ITodos";

interface TodoTypes{
    todo:ITodo
}

const TodoComponent:FC<TodoTypes> = ({todo}) => {
    return (
        <div>
            {todo.id}
        </div>
    );
};

export default TodoComponent;
