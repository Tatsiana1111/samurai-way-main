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
            <div>
                <img alt='profileAvatar' src="https://html5css.ru/howto/img_snow.jpg"/>
            </div>
            <div className={style.descriptionBlock}>
                <div><img style={{margin: '10px'}} src={props.profile.photos.small}/></div>
                <div className={style.descriptionStatus}>
                    <div style={{margin: '5px'}}><b>{props.profile.fullName}</b></div>
                    <div>{props.profile.lookingForAJob ?
                        <img style={{width: '40px', height: '40px'}} src={lookingForAJob}/> :
                        <img style={{width: '40px', height: '40px'}} src={notLookingForAJob}/>}</div>
                    <div style={{margin: '5px'}}>{props.profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    );
};

