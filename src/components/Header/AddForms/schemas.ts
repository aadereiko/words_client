export interface IAddSetSchema {
    name: string;
    description: string;
}


export const addSetSchema = {
    name: '',
    description: '',
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

