import React, { useCallback, useState } from 'react';
import { UnderMenuItemElement, UnderMenuItemTextElement, UnderMenu } from '..';
import ZIndexLayer from '../ZIndexLayer';
import {
    SceneElement, CardElement, CardFaceFrontElement,
    CardFaceBackElement, IconContainerElement, DotIconElement,
    CopyIconElement,
    TransferIconElement,
} from './elements';


interface IFlipCardProps {
    frontText?: string;
    backText?: string;
    frontIcon?: React.ReactNode,
    backIcon?: React.ReactNode,
    handleIconClick?: () => void;
    isMenuOpened?: boolean;
    innerMenu?: React.ReactNode,
}

//https://3dtransforms.desandro.com/card-flip

export const FlipCard: React.FC<IFlipCardProps> = ({ frontText, backText, handleIconClick, isMenuOpened = false, innerMenu }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const onIconClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
        // setIsMenuOpened(status => !status);
        if (handleIconClick) {
            handleIconClick();
        }
    }, [handleIconClick]);

    // const closeMenu = useCallback(() => {
    //     setIsMenuOpened(false);
    // }, [setIsMenuOpened])

    return <>
        {/* {isMenuOpened && <ZIndexLayer onClick={closeMenu} />} */}
        <UnderMenu innerMenu={innerMenu} isMenuOpened={isMenuOpened}>
            <SceneElement onClick={() => setIsFlipped(status => !status)}>
                <CardElement isFlipped={isFlipped}>
                    <CardFaceFrontElement>
                        {frontText}
                        {<IconContainerElement onClick={onIconClick}>
                            <DotIconElement width="30px" height="20px" className="front" />
                        </IconContainerElement>}
                    </CardFaceFrontElement>
                    <CardFaceBackElement>
                        {backText}
                        {<IconContainerElement onClick={onIconClick}>
                            <DotIconElement width="30px" height="20px" className="back" />
                        </IconContainerElement>}
                    </CardFaceBackElement>
                </CardElement>
            </SceneElement>
        </UnderMenu>
    </>
}