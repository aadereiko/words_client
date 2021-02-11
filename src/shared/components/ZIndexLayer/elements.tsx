import styled from "styled-components";


interface ILayerProps {
    zIndex: number;
}

export const LayerElement = styled.div`
    background-color: black;
    z-index: ${(props: ILayerProps) => props.zIndex};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
    cursor: pointer;
`;
