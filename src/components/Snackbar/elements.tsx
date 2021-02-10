import styled, { keyframes } from 'styled-components';
import generalStyles from '../../shared/styles/general';

interface ISnackbarProps {
    isSuccess: boolean;
}

const snackBarAppearing = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 0.95;

  }
`;

export const SnackbarElement = styled.div`
    position: fixed;
    top: 20px;
    right: 50%;
    transform: translateX(50%);
    padding: 5px;
    min-width: 200px;
    height: 50px;
    display: flex;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    z-index: 5;
    border-radius: 10px;
    animation: ${snackBarAppearing} 0.8s;
    cursor: pointer;

    background-color: ${generalStyles.lighterBlueBackgroundColor};
    border: 1px solid #cccecc;
    opacity: 0.95;


    /* color: ${(props: ISnackbarProps) => props.isSuccess ? generalStyles.successColor : generalStyles.errorColor}; */
    /* background-color: ${(props: ISnackbarProps) => props.isSuccess ? generalStyles.successBackground : generalStyles.errorBackground}; */
    /* border: 1px solid ${(props: ISnackbarProps) => props.isSuccess ? generalStyles.successBorder : generalStyles.errorBorder}; */
`;

export const StatusContainerElement = styled.div`
  color: gray;
`