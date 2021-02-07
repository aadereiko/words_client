import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { copyToSetAction, loadSelectedSetAction, removeFromSetAction } from '../../store/wordsSet/sagas';
import { selectCurrentUserSetShortList, selectSelectedWordsSetCreatedAt, selectSelectedWordsSetDescription, selectSelectedWordsSetName, selectSelectedWordsSetUpdatedAt, selectSelectedWordsSetWordList } from '../../store/wordsSet/selectors';
import { IActionWordInSetProps } from '../../store/wordsSet/types';
import { SetPage } from './SetPage';

interface ISetPageContainerParams {
    id: string;
}

export const SetPageContainer: React.FC<void> = () => {
    const dispatch = useDispatch();
    const { id } = useParams<ISetPageContainerParams>();

    const createdAt = useSelector(selectSelectedWordsSetCreatedAt);
    const updatedAt = useSelector(selectSelectedWordsSetUpdatedAt);
    const lastRepetition = useSelector(selectSelectedWordsSetUpdatedAt);
    const name = useSelector(selectSelectedWordsSetName);
    const description = useSelector(selectSelectedWordsSetDescription);
    const words = useSelector(selectSelectedWordsSetWordList);

    const setsList = useSelector(selectCurrentUserSetShortList);

    useEffect(() => {
        dispatch(loadSelectedSetAction({ id }));
    }, [id])

    const copyToSet = useCallback((values: IActionWordInSetProps) => {
        dispatch(copyToSetAction(values))
    }, [dispatch]); 

    const removeFromSet = useCallback((values: IActionWordInSetProps) => {
        dispatch(removeFromSetAction(values))
    }, [dispatch]); 

    return <SetPage
        currentSetId={id}
        createdAt={createdAt}
        updatedAt={updatedAt}
        lastRepetition={lastRepetition}
        name={name}
        description={description}
        words={words}
        setsList={setsList}
        copyToSet={copyToSet}
        removeFromSet={removeFromSet}
    />
};

