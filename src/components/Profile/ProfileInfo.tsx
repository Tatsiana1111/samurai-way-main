import React, {ChangeEvent} from 'react';
import style from "./Profile.module.css";
import userIcon from "../../assets/images/userIcon.png";
import {Preloader} from "../common/Preloader/Preloader";
import lookingForAJob from '../../assets/images/lookingForAJOB.png'
import notLookingForAJob from '../../assets/images/notLookingForJob.svg'
import {IMainUser} from "../../redux/profileReducer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: IMainUser | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photos: any) => void
}
export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>

            <div className={style.descriptionBlock}>
                <div><img style={{margin: '10px'}} src={props.profile.photos?.large || userIcon}/></div>
                {props.isOwner && <input type='file' onChange={onPhotoSelected}/>}
                <div className={style.descriptionStatus}>
                    <div style={{margin: '5px'}}><b>{props.profile.fullName}</b></div>
                    <div>{props.profile.lookingForAJob ?
                        <img style={{width: '40px', height: '40px'}} src={lookingForAJob}/> :
                        <img style={{width: '40px', height: '40px'}} src={notLookingForAJob}/>}</div>
                    <div style={{margin: '5px'}}>{props.profile.lookingForAJobDescription}</div>
                </div>
                <div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
};

