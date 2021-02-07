import { useCallback, useState } from "react"
import { LayerElement } from './elements';

export interface IZIndexLayerProps {
    onClick?: () => void;
}

export const ZIndexLayer: React.FC<IZIndexLayerProps> = ({ onClick }) => {
    return <LayerElement onClick={onClick} />;
}