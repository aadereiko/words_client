import { useCallback, useEffect, useState } from "react"
import { useKeyboardEvent } from "../../hooks/keyHandler";
import TextButton from "../TextButton";
import ZIndexLayer from "../ZIndexLayer";
import { ModalContainerWrapperElement, ModalContainerElement, ModalTitleContainerElement, ButtonsContainerElement } from "./elements"

export interface IModalProps {
    title?: string;
    onSave?: () => void;
    isOpened?: boolean;
    onClickOutside?: () => void;
    onCancelClick?: () => void;
    onEsc?: () => void;
}

export const Modal: React.FC<IModalProps> = ({
    title = '',
    onSave = () => { },
    children,
    isOpened: externalIsOpened,
    onClickOutside,
    onCancelClick,
    onEsc,
}) => {
    const [isOpened, setIsOpened] = useState(!!externalIsOpened);

    useEffect(() => {
        setIsOpened(!!externalIsOpened);
    }, [externalIsOpened, setIsOpened]);

    useKeyboardEvent('Escape', () => {
        onEsc && onEsc();
    })

    const outsideClickHandler = useCallback(() => {
        if (onClickOutside) {
            onClickOutside();
        }
    }, [onClickOutside])


    const onCancelClickHandler = useCallback(() => {
        if (onCancelClick) {
            onCancelClick();
        }
    }, [onCancelClick])

    return <ModalContainerWrapperElement>
        {isOpened &&
            <>
                <ZIndexLayer onClick={outsideClickHandler} />
                <ModalContainerElement>
                    <ModalTitleContainerElement><h2>{title}</h2></ModalTitleContainerElement>
                    {children}
                    <ButtonsContainerElement>
                        <TextButton text="Save" onClick={onSave} />
                        <TextButton text="Cancel" onClick={onCancelClickHandler} />
                    </ButtonsContainerElement>
                </ModalContainerElement>
            </>
        }
    </ModalContainerWrapperElement>
}