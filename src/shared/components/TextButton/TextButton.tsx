import React from 'react';
import { TextButtonElement, TextLinkElement } from './elements';

export interface ITextButtonProps {
    text?: string;
    url?: string;
}

export const TextButton: React.FC<ITextButtonProps> = ({ text, url }) => {
    if (url) {
        return <TextLinkElement href={url}>{text}</TextLinkElement>
    }

    return <TextButtonElement>{text}</TextButtonElement>
}