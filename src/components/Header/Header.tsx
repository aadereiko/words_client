import React, { useCallback, useState } from 'react';
import { TextButton, DropDownMenu, Modal } from '../../shared';
import { AddInCircleElement, HeaderElement, RightContainerElement } from './elements';
import { ReactComponent as UserIcon } from '../../shared/assets/icons/user.svg';
import { DropDownMenuItem } from '../../shared/components/DropDownMenu/DropDownMenuItem';
import AddSetForm from '../shared/forms/AddSetForm';
import { IAddSetSchema } from '../shared/forms';
import { IWordsShortServerSet } from '../../store/wordsSet/types';
import { useKeyboardEvent } from '../../shared/hooks/keyHandler';
import { addWordSchema, IAddWordSchema } from '../shared';
import AddWordForm from '../shared/forms/AddWordForm';
export interface IHeaderProps {
    currentUserName: string;
    setsList: IWordsShortServerSet[];
    onLogout: () => void;
    onAddSet: (values: IAddSetSchema) => void;
    onAddWord: (values: IAddWordSchema) => void;
}

export const Header: React.FC<IHeaderProps> = ({ currentUserName, onLogout, onAddSet, onAddWord, setsList }) => {
    const [isAddWordOpened, setIsAddWordOpened] = useState(false);
    const [isAddSetOpened, setIsAddSetOpened] = useState(false);

    const toggleAddWordOpenedStatus = useCallback(() => {
        setIsAddWordOpened(status => !status);
    }, [setIsAddWordOpened]);

    const toggleAddSetOpenedStatus = useCallback(() => {
        setIsAddSetOpened(status => !status)
    }, [setIsAddSetOpened]);

    const closeAddWordModal = useCallback(() => {
        setIsAddWordOpened(false);
    }, [setIsAddWordOpened]);

    const closeAddSetModal = useCallback(() => {
        setIsAddSetOpened(false);
    }, [setIsAddSetOpened]);

    const openAddWordModal = useCallback(() => {
        if (!isAddSetOpened) {
            setIsAddWordOpened(true);
        }
    }, [setIsAddWordOpened, isAddSetOpened]);

    const openAddSetModal = useCallback(() => {
        if (!isAddWordOpened) {
            setIsAddSetOpened(true);
        }
    }, [setIsAddSetOpened, isAddWordOpened]);

    const handleSaveSet = useCallback((values: IAddSetSchema) => {
        onAddSet(values);
        toggleAddSetOpenedStatus();
    }, [onAddSet, toggleAddWordOpenedStatus]);

    const handleSaveWord = useCallback((values: IAddWordSchema) => {
        onAddWord(values);
        toggleAddWordOpenedStatus();
    }, [onAddSet, toggleAddWordOpenedStatus]);

    useKeyboardEvent('w', openAddWordModal, [isAddWordOpened, isAddSetOpened]);
    useKeyboardEvent('W', openAddWordModal, [isAddWordOpened, isAddSetOpened]);
    useKeyboardEvent('Ц', openAddWordModal, [isAddWordOpened, isAddSetOpened]);
    useKeyboardEvent('ц', openAddWordModal, [isAddWordOpened, isAddSetOpened]);

    useKeyboardEvent('s', openAddSetModal, [isAddWordOpened, isAddSetOpened]);
    useKeyboardEvent('S', openAddSetModal, [isAddWordOpened, isAddSetOpened]);
    useKeyboardEvent('Ы', openAddSetModal, [isAddWordOpened, isAddSetOpened]);
    useKeyboardEvent('ы', openAddSetModal, [isAddWordOpened, isAddSetOpened]);

    return <>
        <HeaderElement>
            <div>
                <TextButton text="Sets" url="/sets" />
            </div>
            <RightContainerElement>
                <DropDownMenu headerText="CREATE">
                    <DropDownMenuItem onClick={toggleAddSetOpenedStatus}>
                        Set
                </DropDownMenuItem>
                    <DropDownMenuItem onClick={toggleAddWordOpenedStatus}>
                        Word
                </DropDownMenuItem>
                </DropDownMenu>
                <DropDownMenu headerText={currentUserName} icon={<UserIcon width="20px" />}>
                    <DropDownMenuItem onClick={onLogout}>
                        Logout
                </DropDownMenuItem>
                </DropDownMenu>
            </RightContainerElement>

        </HeaderElement>
        <AddSetForm isOpened={isAddSetOpened} toggleStatus={toggleAddSetOpenedStatus} onSave={handleSaveSet} onEsc={closeAddSetModal} />
        <AddWordForm withSet initValues={addWordSchema} isOpened={isAddWordOpened} toggleStatus={toggleAddWordOpenedStatus} onSave={handleSaveWord} setsList={setsList} onEsc={closeAddWordModal} />
    </>
}

