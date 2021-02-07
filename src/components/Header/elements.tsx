import { generalStyles } from "../../shared";
import styled from "styled-components";
import { ReactComponent as AddInCircle } from '../../shared/assets/icons/add-in-circle.svg';
import { TextLinkElement } from "../../shared/components/TextButton/elements";
import { DropDownHeaderTextElement } from "../../shared/components/DropDownMenu/elements";

export const HeaderElement = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 60px;
    padding: 0 80px;
    border-bottom: 1px solid ${generalStyles.graySecondColor};

    ${TextLinkElement} {
        font-size: 18px;
        font-weight: 500;
        padding: 0px 5px 14px 5px;

        &:hover {
           border-bottom: 4px solid ${generalStyles.lighterPrimaryBlueColor};
           color: ${generalStyles.lighterPrimaryBlueColor};
        }
    }

    ${DropDownHeaderTextElement} {
        font-weight: 500;
    }
`;

export const AddInCircleElement = styled(AddInCircle)`
    cursor: pointer;
    margin-right: 10px;

    &:hover {
        opacity: 0.8;
    }
`;

export const RightContainerElement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;