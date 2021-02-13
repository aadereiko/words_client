import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { ImageView, Input, Modal, Select, TextButton } from '../../../shared';
import { AddFormElement, AddFormConatinerElement, TranslationBlockElement } from '../../Header/AddForms/elements';
import { IWordsShortServerSet } from '../../../store/wordsSet/types';
import { addWordSchema, addWordValidate, IAddWordSchema } from './schemas';

export interface IAddWordFormProps {
    isOpened: boolean;
    setsList?: IWordsShortServerSet[];
    toggleStatus: () => void;
    onSave: (values: IAddWordSchema) => void;
    onEsc: () => void;
    initValues: IAddWordSchema;
    withSet?: boolean;
}

const AddWordForm: React.FC<IAddWordFormProps> = ({ isOpened, toggleStatus, onSave, setsList, onEsc, initValues, withSet = false }) => {
    const handleSave = useCallback((values) => () => onSave(values), [onSave])

    return isOpened && <Formik initialValues={initValues} onSubmit={onSave} validate={addWordValidate}>
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) =>
            <Modal
                onEsc={onEsc}
                isOpened={isOpened}
                title="Add word"
                onCancelClick={toggleStatus}
                onSave={handleSave(values)}
                onClickOutside={toggleStatus}>
                <AddFormConatinerElement>
                    <AddFormElement autoComplete="off">
                        <Input
                            label="English *"
                            id="eng"
                            name="eng"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.eng}
                            error={touched?.eng && errors?.eng || ''}
                        />
                        <Input
                            label="Russian *"
                            id="rus"
                            name="rus"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.rus}
                            error={touched?.rus && errors?.rus || ''}
                        />
                        <TranslationBlockElement>
                            <TextButton
                                isExternalLink
                                url={`https://context.reverso.net/translation/english-russian/${values.eng.replace(' ', '+')}`}
                                text="Translate with CR"
                            />
                        </TranslationBlockElement>
                       {withSet && <Select
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
                        </Select>}
                        <Input
                            label="Image URL"
                            id="imgUrl"
                            name="imgUrl"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.imgUrl}
                            error={touched?.imgUrl && errors?.imgUrl || ''}
                        />
                        {values.imgUrl && !errors.imgUrl && <ImageView src={values.imgUrl} alt="Word image" openable={false} />}
                    </AddFormElement>
                </AddFormConatinerElement>
            </Modal>}
    </Formik> || null;

}

export default AddWordForm;