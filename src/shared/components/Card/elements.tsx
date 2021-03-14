import styled from 'styled-components';
import generalStyles from '../../styles/general';
import { ReactComponent as DotIcon } from '../../assets/icons/dots.svg';

export const CardContainerElement = styled.div`
    padding: 5px;
    width: 250px;
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    position: relative;
    border: 1px solid ${generalStyles.primaryBlueColor};
    background-color: ${generalStyles.lighterBlueBackgroundColor};

    &:hover {
        transform: translateY(-5px);
        transition: 0.4s;
        cursor: pointer;
    }
`

export const TitleContainerElement = styled.div`
    display: flex;
    justify-content: space-around;
    h4 {
        font-weight: 500;
    }
`

export const ContentContainerElement = styled.div`
`

export const ExtraTextContainerElement = styled.div`
    text-align: end;
    margin-top: 5px;
    width: 90%;
    color: ${generalStyles.grayPrimaryColor};
    font-size: 12px;
`;

export const CardIconContainerElement = styled.div`
  position: absolute;
  top: 2px;
  right: 10px;
`;

export const CardDotIconElement = styled(DotIcon)`
  fill: ${generalStyles.primaryBlueColor};
  &:hover {
    opacity: 0.7;
  }
`