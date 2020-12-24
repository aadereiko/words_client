import React from 'react';
import { TextButton, DropDownMenu } from '../../shared';
import { HeaderElement } from './elements';
import { ReactComponent as UserIcon } from '../../shared/assets/icons/user.svg';
import { DropDownMenuItem } from '../../shared/components/DropDownMenu/DropDownMenuItem';
export interface IHeaderProps {

}

export const Header: React.FC<IHeaderProps> = () => {
    return <HeaderElement>
        <div>
            <TextButton text="Sets" />
        </div>
        <div>
            <DropDownMenu headerText="Alex Adziareika" icon={<UserIcon width="20px" />}>
                <DropDownMenuItem onClick={() => console.log('logout')}>
                    Logout
                </DropDownMenuItem>
            </DropDownMenu>
        </div>
    </HeaderElement>
}

