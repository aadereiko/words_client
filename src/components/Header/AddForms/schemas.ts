export interface IAddSetSchema {
    name: string;
    description: string;
}

export interface IAddWordSchema {
    rus: string;
    eng: string;
    setId: string;
}

export const addSetSchema = {
    name: '',
    description: '',
}

export const addWordSchema = {
    rus: '',
    eng: '',
    setId: '',
}

export const addSetValidate = (values: IAddSetSchema): IAddSetSchema => {
    const errors: IAddSetSchema = {
        name: '',
        description: '',
    };

    if (!values.name) {
        errors.name = 'Requried';
    }

    return errors;
}

export const addWordValidate = (values: IAddWordSchema): IAddWordSchema => {
    const errors: IAddWordSchema = {
        eng: '',
        rus: '',
        setId: '',
    };

    if (!values.eng) {
        errors.eng = 'Required';
    }

    if (!values.rus) {
        errors.rus = 'Required';
    }

    if (!values.setId) {
        errors.setId = 'Required';
    }

    return errors;
} 