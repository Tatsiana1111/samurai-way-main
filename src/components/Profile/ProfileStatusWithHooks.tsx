import React, {ChangeEvent, useEffect, useState} from 'react';


export type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        return setStatus(event.currentTarget.value)
    }

    return (
        <div>
            Status: {!editMode && <span>
            <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
        </span>
        }
            {editMode && (
                <div>
                    <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>
                </div>
            )}
        </div>
    );
}