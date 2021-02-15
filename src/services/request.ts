import { Action } from '@reduxjs/toolkit';
import { setSnackbarAction } from '../store/app/slice';
import { getToken } from './localStorageService';


export interface IRequestParams {
    body?: any;
    headers?: Headers;
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE' | 'PATCH',
}


export interface IResponse<T> {
    data: T;
    error?: string;
    msg?: string;
}

// add T to here
export const requestAPI = (url: string, { body, ...options }: IRequestParams = {}) => {
    const host = 'http://localhost:8000';
    // const host = process.env.REACT_APP_API || 'http://192.168.100.6:8000';
    // const host = 'http://localhost:8000';
    const headers = new Headers(options.headers);
    headers.append('Content-Type', 'application/json');
    const token = getToken();
    headers.append('Authorization', `Bearer ${token}`);
    const fetchOptions: RequestInit = {
        // mode: 'cors',
        headers,
        body: body ? JSON.stringify(body) : null,
        ...options,
    };

    console.log(url, "URL TO SEND");

    return window
        .fetch(host + url, fetchOptions)
        // return response.ok ? response.json() : Promise.reject(response);
        .then((response) => response.json())
        .then((response) => response)
        .catch((err) => {
            console.error(err);
        });
};

export const handleResponseSnackbar = (resp: IResponse<any>): Action => {
    if (!resp) {
        return setSnackbarAction({
            isSuccess: false,
            text: 'Something went wrong',
            isOpened: true,
        })
    }

    const isSuccess = !!resp?.msg;
    return setSnackbarAction({
        isSuccess,
        text: (isSuccess ? resp.msg : resp.error) || '',
        isOpened: true,
    })
}

export default {};