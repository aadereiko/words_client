import styled from 'styled-components';
import { appearingKeyframe } from '../../styles/keyframes';

export const FullImageContainerElement = styled.div`
    z-index: 20;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 80vw;
    animation: ${appearingKeyframe()} 0.5s;
`;

export const FullImageElement = styled.img`
    border-radius: 10px;
    width: 100%;
`;

export const FullImageAdditionalInfoElement = styled.div`
    text-align: center;
    color: white;
`;