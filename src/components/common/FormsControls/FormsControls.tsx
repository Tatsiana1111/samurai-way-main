import style from './FormsControls.module.css'


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