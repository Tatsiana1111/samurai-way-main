import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export interface IFormData {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<IFormData>> = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div><Field type="text" placeholder={'email'} name={'email'} component={Input} validate={[required]}/></div>
            <div><Field type="password" placeholder={'password'} name={'password'} component={Input}
                        validate={[required]}/>
            </div>
            <div><Field type="checkbox" name={'rememberMe'} component={Input}/>Remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
let LoginReduxForm = reduxForm<IFormData>({form: 'login'})(LoginForm)
export default LoginReduxForm;