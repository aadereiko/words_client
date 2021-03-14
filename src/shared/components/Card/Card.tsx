import React, { useCallback } from 'react';
import { UnderMenu } from '..';
import {
    CardContainerElement,
    ContentContainerElement,
    ExtraTextContainerElement,
    TitleContainerElement,
    CardIconContainerElement,
    CardDotIconElement
} from './elements';

export interface ICardProps {
    title?: string;
    extraText?: string;
    leftActionIcon?: React.ReactNode;
    rightActionIcon?: React.ReactNode;
    handleIconClick?: () => void;
    isMenuOpened?: boolean;
    innerMenu?: React.ReactNode,
    hideIcon?: boolean;
}

export const Card: React.FC<ICardProps> = ({ title, children, extraText, handleIconClick, isMenuOpened = false, innerMenu, hideIcon = false }) => {
    const onIconClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e?.stopPropagation();
        e?.preventDefault();
        if (handleIconClick) {
            handleIconClick();
        }
    }, [handleIconClick]);


    return <UnderMenu innerMenu={innerMenu} isMenuOpened={isMenuOpened}>
        <CardContainerElement>
            <TitleContainerElement><h4>{title}</h4></TitleContainerElement>
            {children && <ContentContainerElement>{children}</ContentContainerElement>}
            {extraText && <ExtraTextContainerElement>{extraText}</ExtraTextContainerElement>}
            {!hideIcon && <CardIconContainerElement onClick={onIconClick}>
                <CardDotIconElement width="30px" height="20px" />
            </CardIconContainerElement>}
        </CardContainerElement>
    </UnderMenu>
}
