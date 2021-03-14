import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loadUserAction } from '../../store/user/sagas';
import { selectIsAuth } from '../../store/user/selectors';
import { appAuthRoutes, appNotAuthRoutes } from './routes-config';
import HeaderContainer from '../Header';
import Snackbar from '../Snackbar';
const MainWrapper = styled.div`
    height: 100%;
`

const MainContentElement = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    height: calc(100% - 81px);
`

const BacgrkoundLettersElement = styled.div`
    position: fixed;
    bottom: 5px;
    right: 0px;
    font-size: 400px;
    line-height: 350px;
    opacity: 0.40;
    z-index: -1;
    overflow: hidden;
    max-width: 60%;

    & > span {
        color: #b5b5b5;
    }
`

export const Main: React.FC<{}> = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);

    useEffect(() => {
        dispatch(loadUserAction());
    }, [dispatch])

    return <Router>
        <Snackbar />
        <BacgrkoundLettersElement><span>Aa</span></BacgrkoundLettersElement>
        {isAuth !== null && <MainWrapper>
            {isAuth && <HeaderContainer /> || null}
            <MainContentElement>
                <Switch>
                    {(isAuth ? appAuthRoutes : appNotAuthRoutes)
                        .map(item => <Route exact component={item.component} path={item.path} key={item.id}></Route>)}
                    <Redirect to={isAuth ? '/sets' : '/login'} />
                </Switch>
            </MainContentElement>
        </MainWrapper>}
    </Router>
}