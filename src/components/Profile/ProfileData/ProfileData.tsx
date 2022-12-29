import React from 'react';
import style from "./ProfileData.module.css";
import lookingForAJob from "../../../assets/images/lookingForAJOB.png";
import notLookingForAJob from "../../../assets/images/notLookingForJob.svg";
import {Contacts} from "../Contacts/Contacts";
import {IMainUser} from "../../../redux/profileReducer";


export type ProfileDataType = {
    profile: IMainUser | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photos: any) => void
    goToEditMode: () => void
}
export const ProfileData = (props: ProfileDataType) => {

    return (
        <div className={style.descriptionStatus}>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Edit profile info</button>
            </div>}
            <div style={{margin: '5px'}}><b>FullName: {props.profile?.fullName}</b></div>
            <div>Looking for a job: {props.profile?.lookingForAJob ?
                <img style={{width: '40px', height: '40px'}} src={lookingForAJob}/> :
                <img style={{width: '40px', height: '40px'}} src={notLookingForAJob}/>}</div>
            <div>My professional skills: {props.profile?.lookingForAJobDescription}</div>
            <div>About me: {props.profile?.aboutMe}</div>
            <div>Contacts: {Object.keys(props.profile?.contacts as { [key: string]: string }).map((key) => {
                // @ts-ignore
                //TODO: ts-ignore props.profile.contacts[key]
                return <Contacts contactTitle={key} key={key} contactValue={props.profile?.contacts[key]}/>
            })}</div>
        </div>
    );
};

