import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsSnackbarOpened, selectIsSnackbarSuccess, selectSnackbarText } from '../../store/app/selectors';
import { resetSnackbarAction } from '../../store/app/slice';
import { Snackbar } from './Snackbar';

export const SnackbarContainer: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const isOpened = useSelector(selectIsSnackbarOpened);
    const isSuccess = useSelector(selectIsSnackbarSuccess);
    const text = useSelector(selectSnackbarText);

    const clickHandler = useCallback(() => {
        dispatch(resetSnackbarAction());
    }, [dispatch]);

    useEffect(() => {
        if (isOpened) {
            setTimeout(() => {
                dispatch(resetSnackbarAction());
            }, 3000);
        }
    }, [isOpened]);

    return isOpened ? <Snackbar text={text} isSuccess={isSuccess} onClick={clickHandler} /> : null;
}