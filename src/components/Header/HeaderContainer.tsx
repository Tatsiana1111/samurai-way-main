import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuth, setAuthUserData} from "../../redux/authReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

class HeaderContainerComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuth()
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
    getAuth: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<Promise>
const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const withRouterProfileComponent = withRouter(HeaderContainerComponent)
export const HeaderContainer = connect(mapStateToProps, {getAuth})(withRouterProfileComponent)