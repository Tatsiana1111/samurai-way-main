import React from 'react';

type ContactsType = {
    contactTitle: string
    contactValue: string
}
export const Contacts = ({contactTitle, contactValue}: ContactsType) => {
    return (
        <div>
            {contactTitle}: {contactValue}
        </div>
    );
};

