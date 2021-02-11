import React, { useCallback, useState } from 'react';
import ZIndexLayer from '../ZIndexLayer';
import { ImageContainerElement, LayerElement, PreviewImageElement, LayerTextElement, ImageSlideContainerElement, ImageElement } from './elements';

interface IImageViewProps {
    src: string;
    alt: string;
    openable?: boolean;
}

export const ImageView: React.FC<IImageViewProps> = ({ src, alt, openable = true }) => {
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
            <ZIndexLayer zIndex={50} onClick={onGlobalIndexLayerClick} />
            <ImageSlideContainerElement onClick={onGlobalIndexLayerClick}>
                <ImageElement src={src} alt={alt} />
            </ImageSlideContainerElement>
        </>}
    </>
}