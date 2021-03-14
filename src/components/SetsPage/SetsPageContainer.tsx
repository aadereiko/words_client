import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllUserSetsAction, updateSetAction } from '../../store/wordsSet/sagas';
import { selectCurrentUserSetList } from '../../store/wordsSet/selectors';
import { IWordsSetWithId } from '../../store/wordsSet/types';
import { IAddSetSchema } from '../shared';
import SetsPage from './SetsPage';

const SetsPageContainer = () => {
    const dispatch = useDispatch();
    const userSets = useSelector(selectCurrentUserSetList);

    useEffect(() => {
        dispatch(loadAllUserSetsAction());
    }, []);

    const onRemoveSet = useCallback((id: string) => {
        console.log(id, 'REMOVE SET');
    }, []);

    const onEditSet = useCallback((values: IWordsSetWithId) => {
        dispatch(updateSetAction(values));
    }, []);

    return <SetsPage userSets={userSets} onRemoveClick={onRemoveSet} onEditSave={onEditSet} />;
}

export default SetsPageContainer;