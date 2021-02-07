import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAction } from '../../store/user/sagas';
import { IUserLoginPage, LoginPage } from './LoginPage';

const LoginPageContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const loginUser = useCallback((user: IUserLoginPage) => {
        dispatch(loginUserAction(user))
    }, [dispatch]);

    return <LoginPage sendLoginData={loginUser}></LoginPage>
}

export default LoginPageContainer;