import Joi from "joi";


export const postValidator = Joi.object({
    title:Joi.string().min(2).max(200).messages({
        "string.min":"Enter as least 2 chars",
        "string.max":"Too many symbols",
    }).required(),
    body:Joi.string().min(2).max(200).messages(
        {
            "string.min":"Enter as least 2 chars",
            "string.max":"Too many symbols",
        }
    ).required(),
    userId:Joi.number().min(1).messages({
        "number.min":"Enter as least 1 number",
        "number":"Use only numbers"
    }).required(),

})





