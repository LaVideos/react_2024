import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useDispatch} from "react-redux";
import {todosAction} from "../../redux/todos.slice";
import TodoComponent from "./todo-component";
import LoadingComponent from "../loading/loading-component";

const TodosComponent = () => {

    const {todos,isLoaded} = useAppSelector(state => state.todosSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(todosAction.loadTodos())
    }, []);



    return (
        <div>
            {!isLoaded&&<LoadingComponent/>}
            {
                todos&&todos.map(todo=><TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>
    );
};

export default TodosComponent;
