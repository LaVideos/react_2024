import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelector";
import {todosAction} from "../../redux/todos-slice";
import TodoComponent from "./todo-component";
import LoadingComponent from "../loading/loading-component";

const TodosComponent = () => {


    const dispatch = useAppDispatch();
    const {todos,isLoaded} = useAppSelector(state => state.todosSlice);

    useEffect(() => {
        dispatch(todosAction.getTodos());
    }, []);


    return (
        <div>
            {!isLoaded&&<LoadingComponent/>}
            {
                todos&&todos.map(todo=><TodoComponent todo={todo} key = {todo.id}/>)
            }
        </div>
    );
};

export default TodosComponent;
