import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {authAPI} from "../../api/api";

class HeaderContainerComponent extends React.Component<PropsType> {
    componentDidMount() {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {email, login, id} = data.data
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

interface MapStateToPropsType {
    login: string | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setAuthUserData: (email: string, login: string, id: string) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<Promise>
const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const withRouterProfileComponent = withRouter(HeaderContainerComponent)
export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(withRouterProfileComponent)