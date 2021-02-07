import React from 'react';
import { LoginPage } from './../LoginPage';
import { SetsPage } from '../SetsPage';
import SetPage from './../SetPage';
import { RouteComponentProps } from 'react-router-dom';

interface IRoute {
    path: string;
    component: React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
    id: number;
}

export const appNotAuthRoutes: Array<IRoute> = [{
    path: '/login',
    id: 1,
    component: LoginPage,
}
];

export const appAuthRoutes: Array<IRoute> = [{
    path: '/sets',
    id: 1,
    component: SetsPage,
},
{
    path: '/sets/:id',
    id: 2,
    component: SetPage
}]