import React, { useCallback } from 'react';
import { Input, TextButton } from '../../shared';
import { InputFormElement, TitleElement } from './elements';
import { LoginInputsWrapperElement, LoginWrapperElement } from './elements';
import { Formik } from 'formik';
import { loginSchema, loginValidate } from './loginSchema';

export interface IUserLoginPage {
    email: string;
    password: string;
}

export interface ILoginPageProps {
    sendLoginData: (user: IUserLoginPage) => void;
}

export const LoginPage: React.FC<ILoginPageProps> = ({ sendLoginData }) => {

    const loginUser = useCallback((values: IUserLoginPage) => {
        sendLoginData(values);
    }, [sendLoginData]);

    const loginUserWrapper = useCallback((values: IUserLoginPage) => () => loginUser(values), [loginUser])


    return <LoginWrapperElement>
        <Formik initialValues={loginSchema} onSubmit={loginUser} validate={loginValidate}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) =>
                <InputFormElement onSubmit={handleSubmit}>
                    <TitleElement>WORDS</TitleElement>
                    <LoginInputsWrapperElement>
                        <Input
                            label="Email *"
                            id="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            error={touched?.email && errors?.email || ''}
                        />
                        <Input
                            label="Password *"
                            id="password"
                            name="password"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            error={touched?.password && errors?.password || ''}
                        />
                    </LoginInputsWrapperElement>
                    <TextButton text="Sign in" disabled={!!(errors.email || errors.password || !values.password || !values.email)} onClick={loginUserWrapper(values)} />
                </InputFormElement>}
        </Formik>
    </LoginWrapperElement>
}

