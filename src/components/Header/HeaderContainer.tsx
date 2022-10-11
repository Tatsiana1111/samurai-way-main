import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import axios from "axios";
import {InitialStateType, setAuthUserData} from "../../redux/authReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

class HeaderContainerComponent extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {email, login, id} = response.data.data
                this.props.setAuthUserData(email, login, id)
            }
        })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

interface Promise {
    email: string
    login: string
    id: string
}

type MapStateToPropsType = InitialStateType
type MapDispatchToPropsType = {
    setAuthUserData: (email: string, login: string, id: string) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<Promise>
const mapStateToProps = (state: AppStoreType): InitialStateType => {
    return {
        email: state.auth.email,
        login: state.auth.login,
        id: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

const withRouterProfileComponent = withRouter(HeaderContainerComponent)
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(withRouterProfileComponent)