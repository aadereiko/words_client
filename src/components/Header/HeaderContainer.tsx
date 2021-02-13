import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAction } from '../../store/user/sagas';
import { selectCurrentUserFullName } from '../../store/user/selectors';
import { createWordAction, createWordsSetAction } from '../../store/wordsSet/sagas';
import { selectCurrentUserSetShortList } from '../../store/wordsSet/selectors';
import { IAddWordSchema } from '../shared';
import { IAddSetSchema } from './AddForms/schemas';
import { Header } from './Header';

interface IHeaderContainerProps {

}

export const HeaderContainer: React.FC<IHeaderContainerProps> = () => {
    const dispatch = useDispatch();
    const currentUserName = useSelector(selectCurrentUserFullName);
    const currentUserShortSetsList = useSelector(selectCurrentUserSetShortList);

    const onLogout = useCallback(() => {
        dispatch(logoutUserAction());
    }, []);

    const onAddSet = useCallback((values: IAddSetSchema) => {
        dispatch(createWordsSetAction(values))
    }, []);

    const onAddWord = useCallback((values: IAddWordSchema) => {
        dispatch(createWordAction(values))
    }, []);

    return <Header
        onLogout={onLogout}
        currentUserName={currentUserName}
        onAddSet={onAddSet}
        onAddWord={onAddWord}
        setsList={currentUserShortSetsList}
    />
}  