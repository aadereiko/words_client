import React, { useCallback, useMemo, useState } from 'react';
import { FlipCard, Modal, UnderMenuItemElement, UnderMenuItemTextElement, ZIndexLayer } from '../../shared';
import { IActionWordInSetProps, IWordServer, IWordsShortServerSet } from '../../store/wordsSet/types';
import { CopyToSetForm } from './CopyToSetForm';
import { CopyIconElement, TransferIconElement, WordsContainerElement, NoWordsElement, WordCardContainerElement, ImageIconElement, FullImageContainerElement, FullImageElement, FullImageAdditionalInfoElement } from './elements';
import { ICopyToSetSchema } from './schemas';
import { SetInfo } from './SetInfo';
import { WordsBlockHeader } from './WordsBlockHeader';

interface ISetPageProps {
    currentSetId: string;
    createdAt: string;
    lastRepetition: string;
    updatedAt: string;
    name: string;
    description: string;
    words: Array<IWordServer>;
    setsList: IWordsShortServerSet[];
    copyToSet: (values: IActionWordInSetProps) => void;
    removeFromSet: (values: IActionWordInSetProps) => void;
}

type tLangauge = 'eng' | 'rus';
const ENG = 'eng';
const RUS = 'rus';

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

export const SetPage: React.FC<ISetPageProps> = ({
    createdAt,
    updatedAt,
    lastRepetition,
    description,
    name,
    words,
    setsList,
    copyToSet,
    removeFromSet,
    currentSetId
}) => {
    const [openedMenuStatus, setOpenedMenuStatus] = useState<IOpenedMenu>({
        opened: false,
        id: '',
    });
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [shownImageUrl, setShownImageUrl] = useState<IOpenedImage>(initOpenedImage);

    const [language, setLanguage] = useState<tLangauge>(RUS);
    const changeLanguage = useCallback((lang: tLangauge) => {
        setLanguage(lang);
    }, [setLanguage]);

    const frontKey = useMemo(() => language === ENG ? 'eng' : 'rus', [language]);
    const backKey = useMemo(() => language === ENG ? 'rus' : 'eng', [language]);

    const onIconClick = useCallback((id) => () => {
        setOpenedMenuStatus(status => ({
            opened: !status.opened,
            id,
        }));
    }, [setOpenedMenuStatus]);

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

    return <div>
        <CopyToSetForm
            isOpened={isModalOpened}
            toggleStatus={toggleModalStatus}
            onSave={onClickSaveToCopy}
            setsList={setsList}
            onEsc={closeModal}
        />
        {openedMenuStatus?.opened && <ZIndexLayer onClick={closeMenu} />}
        <SetInfo
            description={description}
            name={name}
            createdAt={createdAt}
            updatedAt={updatedAt}
            lastRepetition={lastRepetition} />
        <WordsBlockHeader
            handleChangeLanguage={changeLanguage}
            language={language}
            wordsLength={words?.length || 0}
        />
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
                        })}>
                            <UnderMenuItemTextElement>
                                Show image
                                </UnderMenuItemTextElement>
                            <ImageIconElement width="18px" />
                        </UnderMenuItemElement>}
                    </>}
                        isMenuOpened={openedMenuStatus?.opened && openedMenuStatus?.id === word._id}
                        handleIconClick={onIconClick(word._id)} />
                </WordCardContainerElement>
            ) || <NoWordsElement>No words yet :(</NoWordsElement>}
            {shownImageUrl.url && <>
                <ZIndexLayer onClick={closeImageView} />
                <FullImageContainerElement>
                    <FullImageElement src={shownImageUrl.url} alt="Word picture" />
                    <FullImageAdditionalInfoElement>
                        {shownImageUrl.eng} | {shownImageUrl.rus}
                    </FullImageAdditionalInfoElement>
                </FullImageContainerElement>
            </>}
        </WordsContainerElement>
    </div >
};

