export interface ICopyToSetSchema {
    setId: string;
}

export const copyToSetValidate = (values: ICopyToSetSchema): ICopyToSetSchema => {
    const errors: ICopyToSetSchema = {
        setId: '',
    };

    if (!values.setId) {
        errors.setId = 'Required';
    }

    return errors;
}

export const copyToSetSchema: ICopyToSetSchema = {
    setId: '',
}