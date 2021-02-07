import styled from "styled-components";
import generalStyles from "../../styles/general";

export const InputContainerElement = styled.div`
    width: 100%;
    padding: 10px 0px;
    position: relative;
`

export interface ILabelElementProps {
    isWithValue: boolean;
    isError: boolean;
}

export const LabelElement = styled.label`
    position: absolute;
    cursor: text;
    top: ${(props: ILabelElementProps) => props.isWithValue ? '0px' : '25px'};
    left: 10px;
    transition: all 0.5s ease-in-out;
    color: ${(props: ILabelElementProps) => props.isError ? generalStyles.errorColor : generalStyles.grayPrimaryColor};
`

export interface ISelectElementProps {
    isError: boolean;
}


export const SelectElement = styled.select`
    width: 100%;
    height: 100%;
    padding: 15px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${(props: ISelectElementProps) => props.isError ? generalStyles.errorColor : generalStyles.grayPrimaryColor};
    color: ${generalStyles.grayPrimaryColor};

    &:focus {
        outline: none;
        & + ${LabelElement} {
            color: ${generalStyles.primaryBlueColor};
            top: 0px;      
        }
    }
`

export const SelectErrorElement = styled.div`
    margin-top: 5px;
    font-size: 12px;
    margin-left: 10px;
    color: ${generalStyles.errorColor};
`