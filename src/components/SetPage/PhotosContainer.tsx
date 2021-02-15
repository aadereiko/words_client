import React from 'react';
import { ImageView } from '../../shared';
import { IWordServer } from '../../store/wordsSet/types';
import { WordPhotoContainerElement, PhotosContainerElement, NoItemsElement } from './elements';

interface IPhotosContainerProps {
    words: IWordServer[];
}

export const PhotosContainer: React.FC<IPhotosContainerProps> = ({ words }) => {
    return <PhotosContainerElement>
        {words?.length ? words.filter(word => word.imgUrl).map(word =>
            <WordPhotoContainerElement key={word._id}>
                <ImageView src={word?.imgUrl || ''} alt={word.eng} additionalText={`${word.eng} | ${word.rus}`} />
            </WordPhotoContainerElement>
        ) : <NoItemsElement>No photos yet :(</NoItemsElement>}
    </PhotosContainerElement>;
}