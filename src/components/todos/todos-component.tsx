import React, {useEffect, useState} from 'react';
import {ITodo} from "../../types/ITodos";
import {services} from "../../services/services";
import TodoComponent from "./todo-component";


const TodosComponent = () => {

    const [todos, setTodos] = useState<ITodo[]>();

    useEffect(() => {
        services.getAllTodos().then(({data})=>setTodos([...data.todos]));
    }, [todos]);

    return (
        <div>
            {
                todos?.length&&todos.map(todo=><TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodosComponent;
