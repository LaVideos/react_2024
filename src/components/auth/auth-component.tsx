import React from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPair} from "../../types";
import {apiAuth} from "../../services";

const AuthComponent = () => {

    const {formState
        ,register
        ,handleSubmit}
        = useForm<ITokenObtainPair>({
        defaultValues: {
            username: 'UserSZ123',
            password: 'P@$$word1',
        }
    });

    const authenticate = (data:ITokenObtainPair)=>{
        apiAuth.authenticate(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} {...register("username")}/>
                <input type={"text"} {...register("password")}/>
                <button>auth</button>
            </form>
        </div>
    );
};

export default AuthComponent;
