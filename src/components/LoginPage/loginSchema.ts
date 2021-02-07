export interface ILoginSchema {
    email: string | null;
    password: string | null;
}

export const loginSchema = {
    email: '',
    password: '',
}

export const loginValidate = (values: ILoginSchema): ILoginSchema => {
    const errors: ILoginSchema = {
        email: null,
        password: null,
    };

    if (!values.email) {
        errors.email = 'Requried';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
}