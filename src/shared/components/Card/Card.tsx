import React from 'react';
import {
    CardContainerElement,
    ContentContainerElement,
    ExtraTextContainerElement,
    TitleContainerElement
} from './elements';

export interface ICardProps {
    title?: string;
    extraText?: string;
    leftActionIcon?: React.ReactNode;
    rightActionIcon?: React.ReactNode;
}

export const Card: React.FC<ICardProps> = ({ title, children, extraText }) => {
    return <CardContainerElement>
        <TitleContainerElement><h4>{title}</h4></TitleContainerElement>
        {children && <ContentContainerElement>{children}</ContentContainerElement>}
        {extraText && <ExtraTextContainerElement>{extraText}</ExtraTextContainerElement>}
    </CardContainerElement>
}
