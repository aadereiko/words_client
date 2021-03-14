import React, { useCallback, useMemo, useState } from 'react';
import { UnderMenuItemElement, UnderMenuItemTextElement, ZIndexLayer } from '../../shared';
import { IWordsServerSet, IWordsSetWithId, WordSetTypes } from '../../store/wordsSet/types';
import { addSetSchema, IAddSetSchema } from '../shared';
import AddSetForm from '../shared/forms/AddSetForm';
import { SetsContainerElement, EditIconElement, TransferIconElement } from './elements';
import { SetCard } from './SetCard';

interface IOpenedMenu {
    id: string;
    isOpened: boolean;
}

const openedMenuInit: IOpenedMenu = {
    id: '',
    isOpened: false,
}
export interface ISetsPageProps {
    userSets: IWordsServerSet[];
    onRemoveClick: (id: string) => void;
    onEditSave: (values: IWordsSetWithId) => void;
}


const SetsPage: React.FC<ISetsPageProps> = ({ userSets, onRemoveClick, onEditSave }) => {
    const customUserSets = useMemo(() => userSets.filter(({ setType }) => setType === WordSetTypes.CUSTOM), [userSets])
    const systemUserSets = useMemo(() => userSets.filter(({ setType }) => setType === WordSetTypes.SYSTEM), [userSets])
    const [openedMenuStatus, setOpenedMenuStatus] = useState<IOpenedMenu>(openedMenuInit);
    const [isEditing, setIsEditing] = useState(false);
    const [setToEdit, setSetToEdit] = useState<IAddSetSchema>(addSetSchema);


    const onIconClick = useCallback((id: string) => () => {
        setOpenedMenuStatus(status => ({
            isOpened: !status.isOpened,
            id,
        }));
    }, [setOpenedMenuStatus]);

    const closeMenu = useCallback(() => {
        setOpenedMenuStatus(status => ({
            ...status,
            isOpened: false,
        }));
    }, [setOpenedMenuStatus]);


    const toggleEditModalStatus = useCallback(() => {
        setIsEditing(status => !status);
    }, [setIsEditing]);


    const onEditClick = useCallback(({ name, description }: IWordsServerSet) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        setIsEditing(true);
        setSetToEdit({
            name,
            description
        });
        closeMenu();
    }, [setIsEditing, closeMenu, setSetToEdit]);

    const closeModal = useCallback(() => {
        setIsEditing(false);
    }, [setIsEditing]);

    const handleSaveClick = useCallback((values: IAddSetSchema) => {
        onEditSave && onEditSave({
            ...values,
            setId: openedMenuStatus.id,
        });
        closeModal();
    }, [onEditSave, openedMenuStatus, closeModal]);

    const handleRemoveClick = useCallback((id: string) => (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        closeMenu();
        onRemoveClick && onRemoveClick(id);
    }, [onRemoveClick]);



    return <>
        {openedMenuStatus?.isOpened && <ZIndexLayer onClick={closeMenu} />}
        <h2>Default sets</h2>
        <SetsContainerElement>
            {systemUserSets.map(userSet => <SetCard isSystem userSet={userSet} key={userSet._id} />)}
        </SetsContainerElement>
        <h2>User sets</h2>
        <AddSetForm
            isOpened={isEditing}
            initValues={setToEdit}
            toggleStatus={toggleEditModalStatus}
            onSave={handleSaveClick}
            onEsc={closeModal}
        />
        <SetsContainerElement>
            {customUserSets.map(userSet =>
                <SetCard
                    isSystem={false}
                    userSet={userSet}
                    key={userSet._id}
                    handleIconClick={onIconClick(userSet._id)}
                    innerMenu={<>
                        <UnderMenuItemElement onClick={onEditClick(userSet)}>
                            <UnderMenuItemTextElement>
                                Edit
                    </UnderMenuItemTextElement>
                            <EditIconElement width="18px" />
                        </UnderMenuItemElement>
                        <UnderMenuItemElement onClick={handleRemoveClick(userSet._id)}>
                            <UnderMenuItemTextElement>
                                Remove set
                        </UnderMenuItemTextElement>
                            <TransferIconElement width="18px" />
                        </UnderMenuItemElement>
                    </>}
                    isMenuOpened={openedMenuStatus.isOpened && openedMenuStatus.id === userSet._id}
                />)}
        </SetsContainerElement>
    </>

}

export default SetsPage;