import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllUserSetsAction } from '../../store/wordsSet/sagas';
import { selectCurrentUserSetList } from '../../store/wordsSet/selectors';
import SetsPage from './SetsPage';

const SetsPageContainer = () => {
    const dispatch = useDispatch();
    const userSets = useSelector(selectCurrentUserSetList);

    useEffect(() => {
        dispatch(loadAllUserSetsAction());
    }, []);

    return <SetsPage userSets={userSets} />;
}

export default SetsPageContainer;