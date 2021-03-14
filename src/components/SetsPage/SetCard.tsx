import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../shared';
import { IWordsServerSet } from '../../store/wordsSet/types';
import { LinkElement, SetCardContainerElement, SetDescriptionElement } from './elements';

export interface ISetCardProps {
    userSet: IWordsServerSet;
    handleIconClick?: () => void;
    isMenuOpened?: boolean;
    innerMenu?: React.ReactNode;
    isSystem: boolean;
}

export const SetCard: React.FC<ISetCardProps> = ({ userSet, handleIconClick, isMenuOpened, innerMenu, isSystem }) => {
    return <LinkElement to={`sets/${userSet._id}`}>
        <SetCardContainerElement>
            <Card title={userSet.name} extraText={`Created at ${userSet.createdAt}`} hideIcon={isSystem} handleIconClick={handleIconClick} isMenuOpened={isMenuOpened} innerMenu={innerMenu}>
                <SetDescriptionElement>{userSet.description}</SetDescriptionElement>
            </Card>
        </SetCardContainerElement>
    </LinkElement>
}