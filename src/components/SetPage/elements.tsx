import styled from "styled-components";
import generalStyles from "../../shared/styles/general";

export const FirstInfoContainerElement = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    min-width: 190px;
`;

export const FieldFirstContainerElement = styled.div`
    & > span:first-child {
        font-weight: 500;
        color: ${generalStyles.grayPrimaryColor};
    }

    & > span:last-child {
        color: black;
    }

`;

export const DescriptionBlockContainerElement = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    & > span:first-child {
        font-weight: 500;
        color: ${generalStyles.grayPrimaryColor};
    };
    & > p {
        color: black;
        margin: 0;
    }
`;

export const WordsContainerElement = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 30px;
`;

export const WordCardContainerElement = styled.div`
    margin: 5px;
`;

export const WordBlockHeaderContainerElement = styled.div`
    display: flex;
    align-items: center;
`;

export const LanguagesContainerElement = styled.div`
    margin-left: 10px;
    span {
            color: ${generalStyles.grayPrimaryColor};
            font-size: 13px;
            font-weight: 500;
            cursor: pointer;

            &.active {
                color: ${generalStyles.primaryBlueColor};
            }

            &:not(.without-hover):hover {
                opacity: 0.9;
            }
        }
`;

export const CopyToSetFormContainerElement = styled.div`
    width: 300px;
`;

export const CopyToSetFormElement = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    margin-bottom: 10px;
`;

export const NoWordsElement = styled.span`
    color: ${generalStyles.grayPrimaryColor};
    font-weight: 500;
`