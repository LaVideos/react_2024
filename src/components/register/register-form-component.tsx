import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {IUser} from "../../models";



const RegisterFormComponent = () => {

    let {
        handleSubmit,
        register
    } = useForm<IUser>();

    const [isRegistrated, setIsRegistrated] = useState<boolean>(false)


    const onSubmitFormHandler = async (data: IUser) => {
        setIsRegistrated(prevState => !prevState);
        console.log(data)

    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmitFormHandler)}>
                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <button>register me</button>
            </form>
            {
                isRegistrated && (<div>you did registration</div>)
            }
        </div>
    );
};

export default RegisterFormComponent;
