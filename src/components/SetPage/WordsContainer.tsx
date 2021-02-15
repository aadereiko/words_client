import React, { useCallback, useMemo, useState } from 'react';
import { FlipCard, FullImageView, UnderMenuItemElement, UnderMenuItemTextElement, ZIndexLayer } from '../../shared';
import { IActionWordInSetProps, IWordServer, IWordsShortServerSet, IWordWithId } from '../../store/wordsSet/types';
import { addWordSchema, IAddWordSchema } from '../shared';
import AddWordForm from '../shared/forms/AddWordForm';
import { CopyToSetForm } from './CopyToSetForm';
import { CopyIconElement, EditIconElement, ImageIconElement, NoItemsElement, TransferIconElement, WordCardContainerElement, WordsContainerElement } from './elements';
import { ICopyToSetSchema } from './schemas';
import { ENG } from './general';


interface IOpenedMenu {
    opened: boolean;
    id: string;
}

interface IOpenedImage {
    url: string;
    eng: string;
    rus: string;
}

const initOpenedImage: IOpenedImage = {
    rus: '',
    eng: '',
    url: '',
}

interface IWordsContainerProps {
    currentSetId: string;
    words: Array<IWordServer>;
    mode: 'eng' | 'rus' | 'photo';
    copyToSet: (values: IActionWordInSetProps) => void;
    removeFromSet: (values: IActionWordInSetProps) => void;
    updateWord: (values: IWordWithId) => void;
    setsList: IWordsShortServerSet[];
}

export const WordsContainer: React.FC<IWordsContainerProps> = ({
    words,
    mode,
    copyToSet,
    removeFromSet,
    currentSetId,
    updateWord,
    setsList
}) => {
    const [openedMenuStatus, setOpenedMenuStatus] = useState<IOpenedMenu>({
        opened: false,
        id: '',
    });
    const [wordToEdit, setWordToEdit] = useState<IWordWithId>({
        ...addWordSchema,
        wordId: '',
    });
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [shownImageUrl, setShownImageUrl] = useState<IOpenedImage>(initOpenedImage);
    const [isEditing, setIsEditing] = useState(false);

    const frontKey = useMemo(() => mode === ENG ? 'eng' : 'rus', [mode]);
    const backKey = useMemo(() => mode === ENG ? 'rus' : 'eng', [mode]);


    const closeMenu = useCallback(() => {
        setOpenedMenuStatus(status => ({
            ...status,
            opened: false,
        }));
    }, [setOpenedMenuStatus])

    const onClickCopyTo = useCallback(() => {
        closeMenu();
        setIsModalOpened(true);
    }, [setIsModalOpened]);

    const toggleModalStatus = useCallback(() => {
        setIsModalOpened(status => !status);
    }, [setIsModalOpened])


    const closeModal = useCallback(() => {
        setIsModalOpened(false);
    }, [setIsModalOpened])

    // menu of set card
    const onClickSaveToCopy = useCallback((values: ICopyToSetSchema) => {
        if (copyToSet && openedMenuStatus.id) {
            copyToSet({
                setId: values.setId,
                wordId: openedMenuStatus.id
            });
            closeModal();
        }
    }, [copyToSet, openedMenuStatus, closeModal]);

    const onClickRemoveFromSet = useCallback(() => {
        if (openedMenuStatus.opened && openedMenuStatus.id) {
            removeFromSet({
                setId: currentSetId,
                wordId: openedMenuStatus.id
            });
            closeMenu();
        }
    }, [currentSetId, openedMenuStatus, closeMenu]);

    const onShowImageClick = useCallback((imgInfo: IOpenedImage) => () => {
        setShownImageUrl(imgInfo);
        closeMenu();
    }, [setShownImageUrl, closeMenu]);

    const closeImageView = useCallback(() => {
        setShownImageUrl(initOpenedImage);
    }, [setShownImageUrl]);


    const toggleEditWordOpenedStatus = useCallback(() => {
        setIsEditing(status => !status);
    }, [setIsEditing]);

    const handleSaveWord = useCallback((values: IAddWordSchema) => {
        toggleEditWordOpenedStatus();
        updateWord({
            ...values,
            wordId: wordToEdit.wordId,
        });
    }, [toggleEditWordOpenedStatus, updateWord, wordToEdit.wordId]);

    const closeEditWordModal = useCallback(() => {
        setIsEditing(false);
    }, [setIsEditing]);

    const onEditClick = useCallback((word: IWordWithId) => () => {
        setIsEditing(true);
        setWordToEdit(word);
        closeMenu();
    }, [setWordToEdit, setIsEditing, closeMenu]);


    const onIconClick = useCallback((id) => () => {
        setOpenedMenuStatus(status => ({
            opened: !status.opened,
            id,
        }));
    }, [setOpenedMenuStatus]);

    return <>
        <CopyToSetForm
            isOpened={isModalOpened}
            toggleStatus={toggleModalStatus}
            onSave={onClickSaveToCopy}
            setsList={setsList}
            onEsc={closeModal}
        />
        {openedMenuStatus?.opened && <ZIndexLayer onClick={closeMenu} />}
        <WordsContainerElement>
            {words?.length && words?.map(word =>
                <WordCardContainerElement key={word._id}>
                    <FlipCard frontText={word[frontKey]} backText={word[backKey]} innerMenu={<>
                        <UnderMenuItemElement onClick={onClickCopyTo}>
                            <UnderMenuItemTextElement>Copy to</UnderMenuItemTextElement>
                            <CopyIconElement width="18px" />
                        </UnderMenuItemElement>
                        <UnderMenuItemElement onClick={onClickRemoveFromSet}>
                            <UnderMenuItemTextElement>
                                Remove from set
                        </UnderMenuItemTextElement>
                            <TransferIconElement width="18px" />
                        </UnderMenuItemElement>
                        {word?.imgUrl && <UnderMenuItemElement onClick={onShowImageClick({
                            eng: word.eng,
                            rus: word.rus,
                            url: word.imgUrl
                        })}
                        >
                            <UnderMenuItemTextElement>
                                Show image
                        </UnderMenuItemTextElement>
                            <ImageIconElement width="18px" />
                        </UnderMenuItemElement>
                        }
                        <UnderMenuItemElement onClick={onEditClick({
                            eng: word.eng,
                            rus: word.rus,
                            imgUrl: word.imgUrl,
                            wordId: word._id,
                        })}>
                            <UnderMenuItemTextElement>
                                Edit
                        </UnderMenuItemTextElement>
                            <EditIconElement width="18px" />
                        </UnderMenuItemElement>
                    </>}
                        isMenuOpened={openedMenuStatus?.opened && openedMenuStatus?.id === word._id}
                        handleIconClick={onIconClick(word._id)} />
                </WordCardContainerElement>
            ) || <NoItemsElement>No words yet :(</NoItemsElement>}
            {shownImageUrl.url && <>
                <ZIndexLayer onClick={closeImageView} />
                <FullImageView url={shownImageUrl.url} alt="A word image" additionalText={`${shownImageUrl.eng} | ${shownImageUrl.rus}`} />
            </>}
            <AddWordForm isOpened={isEditing} initValues={wordToEdit} toggleStatus={toggleEditWordOpenedStatus} onSave={handleSaveWord} onEsc={closeEditWordModal} />
        </WordsContainerElement>
    </>
}