import styled from "styled-components";
import generalStyles from "../../styles/general";


export const ModalContainerWrapperElement = styled.div`
    width: 0px;
    height: 0px;
`;


export const ModalContainerElement = styled.div`
    background-color: ${generalStyles.lighterBlueBackgroundColor};
    padding: 20px;
    border-radius: 20px;
    z-index: 30;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const ModalTitleContainerElement = styled.div`
    h2 {
       font-weight: 400;
    }
`;

export const ButtonsContainerElement = styled.div`
    display: flex;
    justify-content: space-between;
`