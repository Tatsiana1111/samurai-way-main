import React from 'react';
import {IMainUser} from "../../../redux/profileReducer";
import style from "../ProfileData/ProfileData.module.css";
import lookingForAJob from "../../../assets/images/lookingForAJOB.png";
import notLookingForAJob from "../../../assets/images/notLookingForJob.svg";
import {Contacts} from "../Contacts/Contacts";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

type ProfileDataFormType = {
    profile: IMainUser | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photos: any) => void
    handleSubmit: () => void
}


const ProfileDataForm = (props: ProfileDataFormType) => {
    return (
        <form className={style.descriptionStatus} onSubmit={props.handleSubmit}>
            <button>save</button>
            <div style={{margin: '5px'}}><b>FullName: {createField('Full name', 'fullName', [], Input)}</b></div>
            <div>Looking for a job: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}</div>
            <div>My professional
                skills: {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}</div>
            <div>About me: {createField('About me', 'aboutMe', [], Textarea)}</div>
            {/*<div>Contacts: {Object.keys(props.profile?.contacts as { [key: string]: string }).map((key) => {*/}
            {/*    // @ts-ignore*/}
            {/*    //TODO: ts-ignore props.profile.contacts[key]*/}
            {/*    return <Contacts contactTitle={key} key={key} contactValue={props.profile?.contacts[key]}/>*/}
            {/*})}</div>*/}
        </form>
    );
};

// @ts-ignore
export const ProfileDataFormWithReduxForm: any = reduxForm({form: 'profileEdit'})(ProfileDataForm)
