import React from 'react';
import LoginReduxForm, {IFormData} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../../redux/reduxStore";

interface IProps {
    login: (email: string, password: string, rememberMe: boolean, captchaURL: null | string) => void
    isAuth: boolean
    captchaURL: null | string
}


const Login = (props: IProps) => {
    const onSubmit = (formData: IFormData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    );
};
const mapStateToProps = (state: AppStoreType) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL
})

export default connect(mapStateToProps, {login})(Login)
