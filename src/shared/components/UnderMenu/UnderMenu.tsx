import React from 'react';
import { FullUnderMenuContainerElement, MainContainerElement, UnderMenuContainerElement, UnderMenuItemElement, UnderMenuItemTextElement } from './elements';

export interface IUnderMenuProps {
    innerMenu: React.ReactNode;
    isMenuOpened: boolean;
}

export const UnderMenu: React.FC<IUnderMenuProps> = ({ innerMenu, children, isMenuOpened }) => {
    return <FullUnderMenuContainerElement>
        <MainContainerElement className={isMenuOpened ? 'opened-menu' : ''}>
            {children}
        </MainContainerElement>
        {isMenuOpened && <UnderMenuContainerElement>
            {innerMenu}
        </UnderMenuContainerElement>}
    </FullUnderMenuContainerElement>
}