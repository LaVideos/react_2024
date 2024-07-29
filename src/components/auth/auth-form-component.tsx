import React from 'react';
import {useForm} from "react-hook-form";
import {ITokenObtainPair} from "../../models";
import {authService} from "../../services";

const AuthFormComponent = () => {

    const {formState,register,handleSubmit}
        = useForm<ITokenObtainPair>({
    defaultValues:{
        username: 'UserSZ123',
        password: 'P@$$word1',
    }
    });

    let authenticate = (data: ITokenObtainPair) => {
        authService.authenticate(data);
    };


    return (
        <div>

            <form onSubmit={handleSubmit(authenticate)}>
                <input type={"text"} {...register("username")}/>
                <input type={"text"} {...register("password")}/>
                <button>login</button>
            </form>

        </div>
    );
};

export default AuthFormComponent;
