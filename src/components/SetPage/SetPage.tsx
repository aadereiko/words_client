import React, { useCallback, useMemo, useState } from 'react';
import { IActionWordInSetProps, IWordServer, IWordsShortServerSet, IWordWithId } from '../../store/wordsSet/types';
import { PhotosContainer } from './PhotosContainer';
import { SetInfo } from './SetInfo';
import { WordsBlockHeader } from './WordsBlockHeader';
import { WordsContainer } from './WordsContainer';
import { iCardsMode, PHOTO, RUS } from './general';

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
    updateWord: (values: IWordWithId) => void;
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
    currentSetId,
    updateWord
}) => {
    const [mode, setMode] = useState<iCardsMode>(RUS);
    const changeMode = useCallback((mode: iCardsMode) => {
        setMode(mode);
    }, [setMode]);
    const wordsWithPhotos = useMemo(() => words.filter(word => !!word?.imgUrl), [words])

    return <div>
        <SetInfo
            description={description}
            name={name}
            createdAt={createdAt}
            updatedAt={updatedAt}
            lastRepetition={lastRepetition} />
        <WordsBlockHeader
            handleChangeMode={changeMode}
            mode={mode}
            wordsLength={words?.length || 0}
            wordsWithPhotoLength={wordsWithPhotos?.length || 0}
        />
        {mode === PHOTO ?
            <PhotosContainer words={wordsWithPhotos} />
            :
            <WordsContainer
                words={words}
                mode={mode}
                copyToSet={copyToSet}
                removeFromSet={removeFromSet}
                currentSetId={currentSetId}
                updateWord={updateWord}
                setsList={setsList}
            />}
    </div>
};

