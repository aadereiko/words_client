import { Link } from "react-router-dom";
import styled from "styled-components";
import generalStyles from "../../styles/general";

export interface ITextButtonProps {
    disabled: boolean;
}

export const TextButtonElement = styled.span`
    cursor: ${(props: ITextButtonProps) => props.disabled ? 'default' : 'pointer'};
    padding: 15px;
    color: ${(props: ITextButtonProps) => props.disabled ? generalStyles.grayPrimaryColor : generalStyles.primaryBlueColor};
    &:hover {
        color:  ${(props: ITextButtonProps) => props.disabled ? generalStyles.grayPrimaryColor : generalStyles.lighterPrimaryBlueColor};
    };
`;


export const TextLinkElement = styled(Link)`
    text-decoration: none;
    `;

export const ExternalTextLinkElement = styled.a`
    text-decoration: none;
    `;