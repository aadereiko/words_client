import React, { useCallback, useState } from 'react';
import { FullImageView } from '../FullImageView';
import ZIndexLayer from '../ZIndexLayer';
import { ImageContainerElement, LayerElement, PreviewImageElement, LayerTextElement, ImageSlideContainerElement, ImageElement } from './elements';

interface IImageViewProps {
    src: string;
    alt: string;
    openable?: boolean;
    additionalText?: string;
}

export const ImageView: React.FC<IImageViewProps> = ({ src, alt, openable = true, additionalText }) => {
    const [isLayerShown, setIsLayerShown] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const onPreviewHover = useCallback(() => {
        if (openable) {
            setIsLayerShown(true);
        }
    }, [setIsLayerShown, openable]);


    const onPreviewBlur = useCallback(() => {
        setIsLayerShown(false);
    }, [setIsLayerShown]);

    const onPreviewImageClick = useCallback(() => {
        setIsOpened(true);
    }, [setIsOpened]);

    const onGlobalIndexLayerClick = useCallback((e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e?.stopPropagation();
        setIsOpened(false);
    }, [setIsOpened]);

    return <>
        <ImageContainerElement>
            {isLayerShown && <>
                <LayerElement onMouseOut={onPreviewBlur} onClick={onPreviewImageClick}></LayerElement>
                <LayerTextElement>Open</LayerTextElement>
            </>}
            <PreviewImageElement onMouseOver={onPreviewHover} src={src} alt={alt} />
        </ImageContainerElement>
        {isOpened && <>
            <ZIndexLayer onClick={onGlobalIndexLayerClick} />
            <FullImageView url={src} alt={alt} additionalText={additionalText} />
        </>}
    </>
}