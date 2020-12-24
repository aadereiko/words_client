import { generalStyles } from "../../shared";
import styled from "styled-components";

export const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${generalStyles.lighterBlueBackgroundColor};
    height: 50px;
    padding: 0 80px;
    border-bottom: 8px solid ${generalStyles.lighterPrimaryBlueColor};
`