import React from 'react';
import {connect} from "react-redux";
import {Header} from "./Header";
import {getAuth} from "../../redux/authReducer";
import {AppStoreType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

class HeaderContainer extends React.Component<PropsType> {
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
    getAuth: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<Promise>
const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

const withRouterProfileComponent = withRouter(HeaderContainer)
export default connect(mapStateToProps, {getAuth})(withRouterProfileComponent)