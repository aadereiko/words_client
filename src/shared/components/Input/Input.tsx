import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InputContainerElement, InputElement, InputErrorElement, LabelElement } from './elements';

export interface IInput {
    label?: string;
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    onChangeValue?: (value: string) => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlurValue?: (value: string) => void;
    error?: string;
}

export const Input: React.FC<IInput> = ({
    label,
    name,
    id,
    onChange,
    onBlur,
    type,
    value: parentValue,
    onChangeValue,
    onBlurValue,
    error
}) => {
    const [value, setValue] = useState(parentValue);
    const textInput = useRef(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        onChangeValue && onChangeValue(e.target.value);
        setValue(e.target.value);
    }, [setValue, onChange]);

    useEffect(() => {
        setValue(parentValue);
    }, [parentValue, setValue])

    const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        onBlur && onBlur(e);
        onBlurValue && onBlurValue(e.target.value);
    }, [onBlur]);

    const idParam = useMemo(() => id ? { id } : {}, [id]);
    const nameParam = useMemo(() => name ? { name } : {}, [name]);
    const typeParam = useMemo(() => type ? { type } : {}, [type]);

    const labelClick = useCallback(() => {
        // @ts-ignore
        textInput?.current?.focus();
    }, [textInput]);


    return <InputContainerElement>
        <InputElement
            isError={!!error}
            {...idParam}
            {...nameParam}
            {...typeParam}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={value}
            ref={textInput}
        />
        <LabelElement isWithValue={!!value} isError={!!error} onClick={labelClick}>{label}</LabelElement>
        {error && <InputErrorElement>{error}</InputErrorElement> || null}
    </InputContainerElement>
}