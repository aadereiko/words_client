import { transformDate } from './../../services/dates';
import { wordsSetReducer } from './slice';
import { IWordsServerSet, IFullWordsServerSet } from './types';

export const transformWordsSetFromService = (wordsSet: IWordsServerSet): IWordsServerSet => ({
    ...wordsSet,
    createdAt: transformDate(wordsSet.createdAt),
    updatedAt: transformDate(wordsSet.updatedAt),
    lastRepetition: wordsSet.lastRepetition && transformDate(wordsSet.lastRepetition),
})


export const transformFullWordsSetFromService = (wordsSet: IFullWordsServerSet): IFullWordsServerSet => ({
    ...wordsSet,
    createdAt: transformDate(wordsSet.createdAt),
    updatedAt: transformDate(wordsSet.updatedAt),
    lastRepetition: wordsSet.lastRepetition && transformDate(wordsSet.lastRepetition),
})