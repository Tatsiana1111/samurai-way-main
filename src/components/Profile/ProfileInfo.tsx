import React, {ChangeEvent, useState} from 'react';
import style from "./Profile.module.css";
import userIcon from "../../assets/images/userIcon.png";
import {Preloader} from "../common/Preloader/Preloader";
import {IMainUser} from "../../redux/profileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormWithReduxForm} from "./ProfileDataForm/ProfileDataForm";

type ProfileInfoType = {
    profile: IMainUser | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photos: any) => void
    saveProfile: (data: any) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false)
    if (!props.profile) {
        return <Preloader/>
    }
    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData: FormData) => {
        props.saveProfile(formData)
    }
    return (
        <div>

            <div className={style.descriptionBlock}>
                <div><img style={{margin: '10px'}} src={props.profile.photos?.large || userIcon}/></div>
                {props.isOwner && <input type='file' onChange={onPhotoSelected}/>}
                {editMode ? <ProfileDataFormWithReduxForm
                        onSubmit={onSubmit}
                        profile={props.profile} status={props.status}
                        savePhoto={props.savePhoto} isOwner={props.isOwner}
                        updateStatus={props.updateStatus}/> :
                    <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                                 isOwner={props.isOwner} savePhoto={props.savePhoto}/>}
                <div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
};

