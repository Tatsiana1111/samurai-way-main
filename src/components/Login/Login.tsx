import React from 'react';
import LoginReduxForm, {IFormData} from "./LoginForm";

export const Login = () => {
    const onSubmit = (formData: IFormData) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

