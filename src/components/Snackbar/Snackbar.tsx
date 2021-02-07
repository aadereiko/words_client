import React from 'react';
import { SnackbarElement } from './elements';

interface ISnackbarProps {
    isSuccess?: boolean,
    text: string;
    onClick: () => void;
}

export const Snackbar: React.FC<ISnackbarProps> = ({ isSuccess = true, text, onClick }) => {
    return <SnackbarElement isSuccess={isSuccess} onClick={onClick}>{text}</SnackbarElement>
}