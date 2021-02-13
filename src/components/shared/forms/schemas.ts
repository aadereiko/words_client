export const addWordSchema = {
    rus: '',
    eng: '',
    setId: '',
    imgUrl: '',
}

export interface IAddWordSchema {
    rus: string;
    eng: string;
    setId?: string;
    imgUrl?: string;
}

function validURL(str: string): boolean {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}



export const addWordValidate = (values: IAddWordSchema): IAddWordSchema => {
    const errors: IAddWordSchema = {
        eng: '',
        rus: '',
        setId: '',
        imgUrl: '',
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

    if (values.imgUrl && !validURL(values.imgUrl)) {
        errors.imgUrl = 'Image url is not valid';
    }

    return errors;
} 