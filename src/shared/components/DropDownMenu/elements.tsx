import styled, { keyframes } from "styled-components";
import generalStyles from "../../styles/general"

export const IconContainerElement = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
`

export const DropDownHeaderTextElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const DropDownHeaderElement = styled.div`
    position: relative;
`

export const DropDownHeaderContainerElement = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px 10px;
    &:hover ${DropDownHeaderTextElement} {
        color: ${generalStyles.lighterPrimaryBlueColor};
    };
`

export interface IDropDownMenuContainerElementProps {
    isOpened?: boolean;
}

const menuAppearing = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const DropDownMenuContainerElement = styled.div`
    position: absolute;
    width: 100%;
    top: 43px;
    left: -1px; // border
    z-index: 10;
    background-color: white;
    animation: ${menuAppearing} 0.5s;
    box-shadow: 0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05);

`


export const DropDownMenuItemElement = styled.div`
    padding: 10px;
    /* border-bottom: 1px solid ${generalStyles.lighterPrimaryBlueColor}; */

    &:first-child {
        margin-top: 5px;
        /* border-top: 1px solid ${generalStyles.lighterPrimaryBlueColor}; */
    }

    &:last-child {
        margin-bottom: 5px;
    }

    &:hover {
        background-color: #fbfbfb;
        cursor: pointer;
    };
`