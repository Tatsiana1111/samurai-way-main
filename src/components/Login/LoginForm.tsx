import React from 'react';
import style from '../common/FormsControls/FormsControls.module.css';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export interface IFormData {
    email: string
    password: string
    rememberMe: boolean
    captchaURL: null | string
    captcha: null | string
}

const LoginForm: React.FC<InjectedFormProps<IFormData>> = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                {createField('Email', 'email', [required], Input)}
            </div>
            <div>
                {createField('password', 'password', [required], Input, {type: "password"})}
            </div>
            <div>
                {createField(null, 'rememberMe', [], Input, {type: "checkbox"}, 'Remember me')}
            </div>
            {props.captchaURL && <img src={props.captchaURL} alt="captcha"/>}
            {props.captchaURL && createField('Symbols from image', 'captcha', [required], Input)}
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
let LoginReduxForm = reduxForm<any, any>({form: 'login'})(LoginForm)
export default LoginReduxForm;