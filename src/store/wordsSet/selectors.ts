import { IWordsShortServerSet, IWordsServerSet, IFullWordsServerSet, IWordServer } from './types';
import { createSelector } from '@reduxjs/toolkit';
import { IStore } from './../root-reducer';


export const selecWordsSetSlice = (store: IStore) => store.wordsSet;

export const selectCurrentUserSetList =
    createSelector(selecWordsSetSlice, (wordsSetSlice): Array<IWordsServerSet> =>
        wordsSetSlice?.setsOfUser || []);

export const selectCurrentUserSetShortList =
    createSelector(selecWordsSetSlice, (wordsSetSlice): Array<IWordsShortServerSet> =>
        wordsSetSlice?.setsOfUser.map((wordsSet => ({
            name: wordsSet.name,
            _id: wordsSet._id
        })))) || [];

export const selectSelectedWordsSet = createSelector(selecWordsSetSlice, (wordsSetSlice): IFullWordsServerSet | null => wordsSetSlice.selectedSet);

export const selectSelectedWordsSetCreatedAt = createSelector(selectSelectedWordsSet, (wordsSet): string => wordsSet?.createdAt as string || '');
export const selectSelectedWordsSetUpdatedAt = createSelector(selectSelectedWordsSet, (wordsSet): string => wordsSet?.updatedAt as string || '');
export const selectSelectedWordsSetLastRepetition = createSelector(selectSelectedWordsSet, (wordsSet): string => wordsSet?.lastRepetition as string || '');
export const selectSelectedWordsSetName = createSelector(selectSelectedWordsSet, (wordsSet): string => wordsSet?.name || '');
export const selectSelectedWordsSetDescription = createSelector(selectSelectedWordsSet, (wordsSet): string => wordsSet?.description || '');

export const selectSelectedWordsSetWordList = createSelector(selectSelectedWordsSet, (wordsSet): Array<IWordServer> => wordsSet?.words || []);