import React from "react";
import {RootStateType, StoreType} from "./redux/store";
import {store} from "./redux/reduxStore";
import App from "./App";

interface IContextProps {
    _state: RootStateType
    dispatch: ({type}: { type: string }) => void
    getState: () => RootStateType

}

export const StoreContext = React.createContext({} as IContextProps)

export const Provider = (props: any) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}