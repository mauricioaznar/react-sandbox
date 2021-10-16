import React, {useEffect} from 'react';
import App from "./templates/App";
import {useTypedSelector} from "./hooks/useTypedSelector";
import LogInForm from "./templates/auth/LoginForm";
import {useCurrentUserLazyQuery, useCurrentUserQuery} from "./schema";
import {useActions} from "./hooks/useActions";

const Main = () => {
    const {accessToken} = useTypedSelector(
        (state) => state.auth
    )

    const {login} = useActions()


    const [getCurrentUser, { loading, data }] = useCurrentUserLazyQuery();

    useEffect(() => {
        if (data?.currentUser.username) {
            login(window.localStorage.getItem('token')!)
        }
    }, [data])

    useEffect(() => {
        getCurrentUser()
    }, [accessToken])

    return (
        <>

            {
                loading ? 'Loading' :
                accessToken ? <App/> : <LogInForm/>
            }
        </>
    );
};

export default Main;
