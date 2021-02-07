import React from 'react';
import { Card } from '../../shared';
import { IWordsServerSet } from '../../store/wordsSet/types';
import { LinkElement, SetCardContainerElement, SetDescriptionElement } from './elements';

export interface ISetCardProps {
    userSet: IWordsServerSet;
}

export const SetCard: React.FC<ISetCardProps> = ({ userSet }) => {
    return <LinkElement key={userSet._id} to={`/sets/${userSet._id}`}>
        <SetCardContainerElement>
            <Card title={userSet.name} extraText={`Created at ${userSet.createdAt}`}>
                <SetDescriptionElement>{userSet.description}</SetDescriptionElement>
            </Card>
        </SetCardContainerElement>
    </LinkElement>
}