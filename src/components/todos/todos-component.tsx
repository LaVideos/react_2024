import React, {useEffect, useState} from 'react';
import {services} from "../../services/json_services";
import {ITodo} from "../../types/ITodo";
import TodoComponent from "./todo-component";

const TodosComponent = () => {

    const [todos, setTodos] = useState<ITodo[]>()

    useEffect(() => {
        services.getAllTodos().then(({data}) => setTodos([...data]))
    }, []);


    return (
        <div>
            {
                todos?.length && todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default TodosComponent;
