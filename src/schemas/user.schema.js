const Joi = require('joi');

const UserSchema = {
    register: Joi.object({
        name: Joi.string()
            .min(4)
            .max(16)
            .required()
            .messages({
                'string.min': 'Name must be at least 4 characters',
                'string.max': 'Name must be at most 16 characters',
                'any.required': 'Name is required'
            }),

        phone: Joi.string()
            .pattern(/^[0-9]{9,15}$/)
            .required()
            .messages({
                'string.pattern.base': 'Phone number must contain only digits (9–15)',
                'any.required': 'Phone number is required'
            }),

        password: Joi.string()
            .min(6)
            .max(20)
            .pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
            .required()
            .messages({
                'string.min': 'Password must be at least 6 characters',
                'string.max': 'Password must be at most 20 characters',
                'any.required': 'Password is required'
            })
    })
};

module.exports = UserSchema;


module.exports = {
    UserSchema
}