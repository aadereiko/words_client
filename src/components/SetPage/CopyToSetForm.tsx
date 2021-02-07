import { Formik } from 'formik';
import React, { useCallback } from 'react';
import { Input, Modal, Select } from '../../shared';
import { IWordsShortServerSet } from '../../store/wordsSet/types';
import { CopyToSetFormContainerElement, CopyToSetFormElement } from './elements';
import { ICopyToSetSchema, copyToSetSchema, copyToSetValidate } from './schemas';

export interface ICopyToSetFormProps {
    isOpened: boolean;
    setsList: IWordsShortServerSet[];
    toggleStatus: () => void;
    onSave: (values: ICopyToSetSchema) => void;
    onEsc: () => void;
}

export const CopyToSetForm: React.FC<ICopyToSetFormProps> = ({ isOpened, toggleStatus, onSave, onEsc, setsList }) => {
    const handleSave = useCallback((values) => () => onSave(values), [onSave])

    return isOpened && <Formik initialValues={copyToSetSchema} onSubmit={onSave} validate={copyToSetValidate} >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) =>
            <Modal
                onEsc={onEsc}
                isOpened={isOpened}
                title="Copy to set"
                onCancelClick={toggleStatus}
                onSave={handleSave(values)}
                onClickOutside={toggleStatus}>
                <CopyToSetFormContainerElement>
                    <CopyToSetFormElement autoComplete="off">
                        <Select
                            label="Set *"
                            id="setId"
                            name="setId"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.setId}
                            error={touched?.setId && errors?.setId || ''}

                        >
                            <option key="empty-element" value="" disabled hidden></option>
                            {setsList?.map(
                                (wordsSet) =>
                                    <option key={wordsSet._id} value={wordsSet._id}>{wordsSet.name}</option>
                            )}
                        </Select>
                    </CopyToSetFormElement>
                </CopyToSetFormContainerElement>
            </Modal>}
    </Formik> || null;
}