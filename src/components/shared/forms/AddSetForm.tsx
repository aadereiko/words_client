import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { Input, Modal } from '../../../shared';
import { AddFormElement, AddFormConatinerElement } from './elements';
import { addSetSchema, addSetValidate, IAddSetSchema } from './schemas';

export interface IAddSetFormProps {
    isOpened: boolean;
    toggleStatus: () => void;
    onSave: (values: IAddSetSchema) => void;
    initValues?: IAddSetSchema;
    onEsc: () => void;
}

const AddSetForm: React.FC<IAddSetFormProps> = ({ isOpened, toggleStatus, onSave, onEsc, initValues = addSetSchema}) => {
    const handleSave = useCallback((values) => () => onSave(values), [onSave])

    return isOpened && <Formik initialValues={initValues} onSubmit={onSave} validate={addSetValidate} >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) =>
            <Modal
                onEsc={onEsc}
                isOpened={isOpened}
                title="Add set"
                onCancelClick={toggleStatus}
                onSave={handleSave(values)}
                onClickOutside={toggleStatus}>
                <AddFormConatinerElement>
                    <AddFormElement autoComplete="off">
                        <Input
                            label="Name *"
                            id="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={touched?.name && errors?.name || ''}
                        />
                        <Input
                            label="Description"
                            id="description"
                            name="description"
                            type="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            error={touched?.description && errors?.description || ''}
                        />
                    </AddFormElement>
                </AddFormConatinerElement>
            </Modal>}
    </Formik> || null;

}

export default AddSetForm;