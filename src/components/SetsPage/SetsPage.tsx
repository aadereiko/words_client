import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card } from '../../shared';
import { loadAllUserSetsAction } from '../../store/wordsSet/sagas';
import { IWordsServerSet, WordSetTypes } from '../../store/wordsSet/types';
import { SetDescriptionElement, SetsContainerElement, SetCardContainerElement, LinkElement } from './elements';
import { SetCard } from './SetCard';

export interface ISetsPageProps {
    userSets: IWordsServerSet[];
}

const SetsPage: React.FC<ISetsPageProps> = ({ userSets }) => {
    const customUserSets = useMemo(() => userSets.filter(({ setType }) => setType === WordSetTypes.CUSTOM), [userSets])
    const systemUserSets = useMemo(() => userSets.filter(({ setType }) => setType === WordSetTypes.SYSTEM), [userSets])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllUserSetsAction());
    }, []);

    return <>
        <h2>Default sets</h2>
        <SetsContainerElement>
            {systemUserSets.map(userSet => <SetCard userSet={userSet} key={userSet._id} />)}
        </SetsContainerElement>
        <h2>User sets</h2>
        <SetsContainerElement>
            {customUserSets.map(userSet => <SetCard userSet={userSet} key={userSet._id} />)}
        </SetsContainerElement>
    </>

}

export default SetsPage;