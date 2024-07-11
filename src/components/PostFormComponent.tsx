import React from 'react';
import {useForm} from "react-hook-form";
import {SERVICES} from "../services/services";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post-validator";


interface PostFormType {
    title:string,
    body:string,
    userId:number
}


const PostFormComponent = () => {

    const {formState:{errors},register,handleSubmit,} =
        useForm<PostFormType>({
            mode:"all",
            resolver:joiResolver(postValidator)
        });



    const handleSubmitAction =({title,body,userId}:PostFormType)=>{
        SERVICES.postPosts(title,body,userId).then(value => console.log(value));
    }

    return (
        <div>

            <form onSubmit={handleSubmit(handleSubmitAction)}>

                <input {...register("title")}/>
                <input {...register("body")}/>
                <input {...register("userId")}/>

                <button>send</button>

            </form>

            <div>
                {errors.userId && <div>{errors.userId.message}</div>}
                {errors.title && <div>{errors.title.message}</div>}
                {errors.body && <div>{errors.body.message}</div>}
            </div>

        </div>
    );
};

export default PostFormComponent;
