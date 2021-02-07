import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InputContainerElement, SelectElement, SelectErrorElement, LabelElement } from './elements';

export interface ISelectProps {
    label?: string;
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    onChangeValue?: (value: string) => void;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    onBlurValue?: (value: string) => void;
    error?: string;
}

export const Select: React.FC<ISelectProps> = ({
    label,
    name,
    id,
    onChange,
    onBlur,
    type,
    value: parentValue,
    onChangeValue,
    onBlurValue,
    error,
    children
}) => {
    const [value, setValue] = useState(parentValue);
    const textInput = useRef(null);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeValue && onChangeValue(e.target.value);
        setValue(e.target.value);
    }, [setValue, onChange]);

    useEffect(() => {
        setValue(parentValue);
    }, [parentValue, setValue])

    const handleBlur = useCallback((e: React.FocusEvent<HTMLSelectElement>) => {
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
        <SelectElement
            isError={!!error}
            {...idParam}
            {...nameParam}
            {...typeParam}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={value}
        >
            {children}
        </SelectElement>
        <LabelElement isWithValue={!!value} isError={!!error} onClick={labelClick}>{label}</LabelElement>
        {error && <SelectErrorElement>{error}</SelectErrorElement> || null}
    </InputContainerElement>
}