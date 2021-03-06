export interface IWordsSet {
    name: string;
    description?: string;
}

export interface IWordsSetWithId extends IWordsSet {
    setId: string;
}


export type IWordSetType = 'SYSTEM' | 'CUSTOM';
export const WordSetTypes = {
    SYSTEM: 'SYSTEM',
    CUSTOM: 'CUSTOM',
}

export interface IWordsServerSet {
    _id: string;
    name: string;
    description?: string;
    createdAt: Date | string;
    updatedAt: Date | string;
    lastRepetition: Date | string;
    setType: IWordSetType;
}

export interface IWord {
    rus: string;
    eng: string;
    setId?: string;
    setIds?: string[];
    imgUrl?: string;
}

export interface IWordWithId extends IWord {
    wordId: string;
}

export interface IWordServer extends IWord {
    _id: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}

export interface IFullWordsServerSet extends IWordsServerSet {
    words: Array<IWordServer>;
}

export interface IWordsShortServerSet {
    _id: string;
    name: string;
}

export interface IWordSetCreateResponse extends IWordsServerSet { };

export interface ILoadSelectedSetReq {
    id: string;
}

export interface IActionWordInSetProps {
    setId: string;
    wordId: string;
}