import React, { useState } from 'react';

export const Profile = () => {

    const [title, setTitle] = useState('');
    const [bio, setBio] = useState('');
    const [company, setCompany] = useState('');
    const [location, setLocation] = useState('');
    const [website, setWebsite] = useState('');

    const onChange = (set: (value: string) => void, event: any) => {
        const { value } = event.target;
        set(value);
    }

    const onSave = () => {
        console.log(
            title, bio, company, location, website
        )
    }

    return (
        <div className="profile inner-container">
            <div className="profile__content">
                <p>Profile</p>
                <div className="field field--row">
                    <label>Title</label>
                    <input type="text" name="title" onChange={(e) => onChange(setTitle, e)} placeholder="Software Engineer, UX Developer, etc." value={title} />
                </div>
                <div className="field field--row">
                    <label>Bio</label>
                    <textarea name="bio" onChange={(e) => onChange(setBio, e)} rows={4} cols={25} placeholder="Write a few words about yourself" value={bio}>
                    </textarea>
                </div>
                <div className="field field--col">
                    <label>Company</label>
                    <input type="text" name="company" onChange={(e) => onChange(setCompany, e)} placeholder="Company" value={company} />
                </div>
                <div className="field field--col">
                    <label>Location</label>
                    <input type="text" name="location" onChange={(e) => onChange(setLocation, e)} placeholder="Location" value={location} />
                </div>
                <div className="field field--col">
                    <label>Website</label>
                    <input type="text" name="website" onChange={(e) => onChange(setWebsite, e)} placeholder="Website" value={website} />
                </div>
                <div className="field--right">
                    <button onClick={onSave}>Save</button>
                </div>
            </div>
        </div>
    )
}