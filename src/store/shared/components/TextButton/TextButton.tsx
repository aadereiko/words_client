import React from 'react';
import "./TextButton.css";

export interface ITextButtonProps {
    text: string;
}

export const TextButton: React.FC<ITextButtonProps> = ({ text }) => {
    return <span className="button">{text}</span>
}