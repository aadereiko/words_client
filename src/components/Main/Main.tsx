import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from '../Header';

const MainWrapper = styled.div`
    height: 100%;
`

const MainContentElement = styled.div`
    width: 80%;
    margin-left: 10%;
    height: calc(100% - 58px);
`

export const Main: React.FC<{}> = () => {
    return <Router>
        <MainWrapper>
            <Header></Header>
            <MainContentElement>
                <Switch>

                </Switch>
            </MainContentElement>
        </MainWrapper>
    </Router>
}