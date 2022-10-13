import React from "react";

export const withAuthRedirect = (Component: any) => {
    debugger
    const RedirectComponent = (props: any) => {
        debugger
        return <Component value={100} {...props}/>
    }

    return RedirectComponent
}