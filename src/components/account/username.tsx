import React, { useState } from 'react';

export const Username = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onChange = (set: (value: string) => void, event: any) => {
        const { value } = event.target;
        set(value);
    }

    const onSave = () => {
        console.log(
            username, password, confirmPassword
        )
    }
    return (
        <div className="username">
            <div className="username__content">
                <div className="field field--row">
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={(e) => onChange(setUsername, e)} />
                </div>
                <div className="field field--row">
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={(e) => onChange(setPassword, e)} />
                </div>
                <div className="field field--row">
                    <label>Confirm password</label>
                    <input type="password" name="confirm-password" value={confirmPassword} onChange={(e) => onChange(setConfirmPassword, e)} />
                </div>
                <div className="field--right">
                    <button onClick={onSave}>Save</button>
                </div>
            </div>
        </div >
    )
}