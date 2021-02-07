import React, { useCallback, useMemo } from 'react';
import { ExternalTextLinkElement, TextButtonElement, TextLinkElement } from './elements';

export interface ITextButtonProps {
    text?: string;
    url?: string;
    onClick?: Function;
    disabled?: boolean;
    isExternalLink?: boolean;
}

export const TextButton: React.FC<ITextButtonProps> = ({ text, url, onClick, disabled, isExternalLink }) => {
    const optimizedOnClick = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void => {
        if (!disabled && onClick) {
            onClick(e);
        }

    }, [onClick, disabled]);

    if (url) {

        if (isExternalLink) {
            return <ExternalTextLinkElement target="_blank" href={url}>{text}</ExternalTextLinkElement>
        }

        return <TextLinkElement to={url}>{text}</TextLinkElement>
    }

    return <TextButtonElement disabled={!!disabled} onClick={optimizedOnClick}> {text}</ TextButtonElement >
}