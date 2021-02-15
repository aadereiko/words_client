import React, { useCallback } from 'react';
import { LanguagesContainerElement, WordBlockHeaderContainerElement } from './elements';

export type iCardsMode = 'eng' | 'rus' | 'photo';
const ENG = 'eng';
const RUS = 'rus';
const PHOTO = 'photo';

export interface IWordsBlockHeaderProps {
    mode: iCardsMode;
    handleChangeMode: (mode: iCardsMode) => void;
    wordsLength: number;
    wordsWithPhotoLength: number;
}

export const WordsBlockHeader: React.FC<IWordsBlockHeaderProps> = ({ mode, handleChangeMode, wordsLength, wordsWithPhotoLength }) => {
    const onChangeLanguage = useCallback((mode: iCardsMode) => () => {
        if (handleChangeMode) {
            handleChangeMode(mode);
        }
    }, [handleChangeMode]);

    return <WordBlockHeaderContainerElement>
        <h3>Words: </h3>
        <LanguagesContainerElement>
            <span className={mode === ENG ? 'active' : ''} onClick={onChangeLanguage(ENG)}>ENG </span>
            <span className="without-hover">{' | '}</span>
            <span className={mode === RUS ? 'active' : ''} onClick={onChangeLanguage(RUS)}>RUS</span>
            <span className="without-hover">{' | '}</span>
            <span className={mode === PHOTO ? 'active' : ''} onClick={onChangeLanguage(PHOTO)}>PHOTOS</span>
            <span className="without-hover">, {mode === PHOTO ? wordsWithPhotoLength : wordsLength}</span>
        </LanguagesContainerElement>
    </WordBlockHeaderContainerElement>

}