import React, { useCallback, useState, useRef } from 'react';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import { useOutsideClickCheck } from '../../hooks/outsideClick';
import { DropDownMenuItem } from './DropDownMenuItem';
import { DropDownHeaderElement, DropDownHeaderTextElement, DropDownMenuContainerElement, IconContainerElement, DropDownHeaderContainerElement } from './elements';

export interface IDropDownMenu {
    icon?: React.ReactNode,
    headerText?: string;
}

export const DropDownMenu: React.FC<IDropDownMenu> = ({ icon, headerText, children }) => {
    const [opened, setOpened] = useState(false);
    const dropDownRef = useRef(null);
    const toggleOpened = useCallback(() => { setOpened(isOpened => !isOpened) }, [setOpened]);
    const closeDropdownIfOpened = useCallback(() => { if (opened) { setOpened(false) } }, [setOpened, opened])

    useOutsideClickCheck(dropDownRef, closeDropdownIfOpened);

    return <DropDownHeaderElement ref={dropDownRef} onClick={toggleOpened}>
        <DropDownHeaderContainerElement>
            <IconContainerElement>
                {icon || null}
            </IconContainerElement>
            <DropDownHeaderTextElement>
                {headerText || ''}
            </DropDownHeaderTextElement>
        </DropDownHeaderContainerElement>
        {opened && <DropDownMenuContainerElement>
            {children}
        </DropDownMenuContainerElement>}
    </DropDownHeaderElement>
}