import { useCallback, useState } from "react"
import { LayerElement } from './elements';

export interface IZIndexLayerProps {
    onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    zIndex?: number;
}

export const ZIndexLayer: React.FC<IZIndexLayerProps> = ({ onClick, zIndex = 10 }) => {
    return <LayerElement onClick={onClick} zIndex={zIndex} />;
}