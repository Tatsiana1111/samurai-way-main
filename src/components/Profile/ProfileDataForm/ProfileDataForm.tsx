import React from 'react';
import {IMainUser} from "../../../redux/profileReducer";
import style from "../ProfileData/ProfileData.module.css";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

type ProfileDataFormType = {
    profile: IMainUser | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photos: any) => void
    handleSubmit: () => void
    error: any
}


const ProfileDataForm = (props: ProfileDataFormType) => {
    return (
        <form className={style.descriptionStatus} onSubmit={props.handleSubmit}>
            <button>save</button>
            {props.error &&
                <div className={style.formSummaryError}>
                    {props.error}
                </div>}
            <div style={{margin: '5px'}}><b>FullName: {createField('Full name', 'fullName', [], Input)}</b></div>
            <div>Looking for a job: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</div>
            <div>My professional
                skills: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}</div>
            <div>About me: {createField('About me', 'aboutMe', [], Textarea)}</div>
            <div>Contacts: {Object.keys(props.profile?.contacts as { [key: string]: string }).map((key) => {
                return <div key={key}>
                    <div>{key}: {createField(key, 'contacts.' + key, [], Input)}</div>
                </div>
            })}</div>
        </form>
    );
};

export const ProfileDataFormWithReduxForm = reduxForm<any, any>({form: 'profileEdit'})(ProfileDataForm)
