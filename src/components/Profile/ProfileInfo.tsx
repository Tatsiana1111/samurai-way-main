import React from 'react';
import style from "./Profile.module.css";
import {Preloader} from "../common/Preloader/Preloader";
import lookingForAJob from '../../assets/images/lookingForAJOB.png'
import notLookingForAJob from '../../assets/images/notLookingForJob.svg'


export const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div><img alt='profileAvatar' src="https://html5css.ru/howto/img_snow.jpg"/></div>
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <span>{props.profile.lookingForAJob === true ?
                    <img style={{width: '40px', height: '40px'}} src={lookingForAJob}/> :
                    <img style={{width: '40px', height: '40px'}} src={notLookingForAJob}/>}</span>
                <span>{props.profile.lookingForAJobDescription}</span>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    );
};

