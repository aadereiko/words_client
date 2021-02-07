import React, { useCallback } from 'react';
import { LanguagesContainerElement, WordBlockHeaderContainerElement } from './elements';

export type tLangauge = 'eng' | 'rus';
const ENG = 'eng';
const RUS = 'rus';

export interface IWordsBlockHeaderProps {
    language: tLangauge;
    handleChangeLanguage: (lang: tLangauge) => void;
    wordsLength: number;
}

export const WordsBlockHeader: React.FC<IWordsBlockHeaderProps> = ({ language, handleChangeLanguage, wordsLength }) => {
    const onChangeLanguage = useCallback((lang: tLangauge) => () => {
        if (handleChangeLanguage) {
            handleChangeLanguage(lang);
        }
    }, [handleChangeLanguage]);

    return <WordBlockHeaderContainerElement>
        <h3>Words: </h3>
        <LanguagesContainerElement>
            <span className={language === ENG ? 'active' : ''} onClick={onChangeLanguage(ENG)}>ENG </span>
            <span className="without-hover">{' | '}</span>
            <span className={language === RUS ? 'active' : ''} onClick={onChangeLanguage(RUS)}>RUS</span>
            <span className="without-hover">, {wordsLength}</span>
        </LanguagesContainerElement>
    </WordBlockHeaderContainerElement>

}