import styled from 'styled-components';
import { appearingKeyframe } from '../../styles/keyframes';


export const ImageContainerElement = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const PreviewImageElement = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 100%;
`

export const LayerElement = styled.div`
    position: absolute;
    border-radius: 10px;
    background: black;
    opacity: 0.5;
    top: 0;
    bottom: 0px;
    left: 0;
    right: 0;
    cursor: pointer;
`

export const LayerTextElement = styled.span`
    position: absolute;
    color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
`

export const ImageSlideContainerElement = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 70;
`
export const ImageElement = styled.img`
    position: absolute;
    max-width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${appearingKeyframe()} 0.8s;
`

