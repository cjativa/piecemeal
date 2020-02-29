import React, { useState } from 'react';

export const Information = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const onChange = (set: (value: string) => void, event: any) => {
        const { value } = event.target;
        set(value);
    }

    const onSave = () => {
        console.log(
            firstName, lastName, email
        )
    }

    return (
        <div className="information">
            <div className="information__content">
                <p>Information</p>
                <div className="field field--row">
                    <label>First Name</label>
                    <input type="text" name="first-name" value={firstName} onChange={(e) => onChange(setFirstName, e)} />
                </div>
                <div className="field field--row">
                    <label>Last Name</label>
                    <input type="text" name="last-name" value={lastName} onChange={(e) => onChange(setLastName, e)} />
                </div>
                <div className="field field--row">
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(e) => onChange(setEmail, e)} />
                </div>
                <div className="field--right">
                    <button onClick={onSave}>Save</button>
                </div>
            </div>
        </div>
    )
}