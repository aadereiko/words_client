import React, { useCallback } from 'react';
import { DropDownMenuItemElement } from './elements';

export interface IDropDownMenuItem {
    onClick?: Function;
}

export const DropDownMenuItem: React.FC<IDropDownMenuItem> = ({ children, onClick }) => {
    const optimizedOnClick = useCallback((e) => onClick && onClick(e), [onClick]);
    return <DropDownMenuItemElement onClick={optimizedOnClick}>{children}</DropDownMenuItemElement>
}