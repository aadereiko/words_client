import React from 'react';
import { DescriptionBlockContainerElement, FieldFirstContainerElement, FirstInfoContainerElement } from './elements';

export interface SetInfoProps {
    createdAt: string;
    lastRepetition: string;
    updatedAt: string;
    name: string;
    description: string;
}

export const SetInfo: React.FC<SetInfoProps> = ({ name, createdAt, updatedAt, lastRepetition, description }) => {
    return <>
        <h2>{name}</h2>
        <FirstInfoContainerElement>
            <FieldFirstContainerElement>
                <span>Created at: </span>
                <span>{createdAt}</span>
            </FieldFirstContainerElement>
            <FieldFirstContainerElement>
                <span>Updated at: </span>
                <span>{updatedAt}</span>
            </FieldFirstContainerElement>
            <FieldFirstContainerElement>
                <span>Last repetition at: </span>
                <span>{lastRepetition}</span>
            </FieldFirstContainerElement>
        </FirstInfoContainerElement>

        {description && <DescriptionBlockContainerElement>
            <span>Description: </span>
            <p>{description}</p>
        </DescriptionBlockContainerElement>}
    </>
}