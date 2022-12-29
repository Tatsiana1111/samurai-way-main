import style from './FormsControls.module.css'
import {Field} from "redux-form";


// @ts-ignore
const FormControl = ({input, meta, child, Element, ...props}) => {
    const showError = meta.touched && meta.error
    return (
        <div className={`${style.formControl} ${showError ? style.error : ''}`}>
            <div>
                <Element {...input} {...props}/>
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props: any) => {
    return <FormControl {...props} Element='textarea'></FormControl>
}

export const Input = (props: any) => {
    return <FormControl {...props} Element='input'></FormControl>
}

export const createField = (placeholder: string, name: string, validators: [], component: any, props = {}, text = '') => {
    return <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props}/>{text}
    </div>
}