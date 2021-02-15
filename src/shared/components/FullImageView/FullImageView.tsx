import React from 'react';
import { FullImageAdditionalInfoElement, FullImageContainerElement, FullImageElement } from './elements';

interface IFullImageViewProps {
    url: string;
    alt: string;
    additionalText?: string;
}

export const FullImageView: React.FC<IFullImageViewProps> = ({ url, alt, additionalText }) => {
    return <FullImageContainerElement>
        <FullImageElement src={url} alt={alt} />
        {additionalText && <FullImageAdditionalInfoElement>
            {additionalText}
        </FullImageAdditionalInfoElement>}
    </FullImageContainerElement>
}