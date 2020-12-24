import styled from "styled-components";
import generalStyles from "../../styles/general";

const generalStyle = `
    color: ${generalStyles.primaryBlueColor};
    cursor: pointer;
    padding: 15px;

    &:hover {
        color: ${generalStyles.lighterPrimaryBlueColor};
    }
`;

export const TextButtonElement = styled.span`${generalStyle}`;
export const TextLinkElement = styled.a`${generalStyle}
    text-decoration: none;
    `;