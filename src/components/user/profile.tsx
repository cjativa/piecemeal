import React, { useState } from 'react';

export const Profile = () => {
    return (
        <div className="profile inner-container">
            <p>Profile</p>
            <div className="field field--row">
                <label>Title</label>
                <input type="text" placeholder="Software Engineer, UX Developer, etc." />
            </div>
            <div className="field field--row">
                <label>Bio</label>
                <textarea rows={4} cols={25} placeholder="Write a few words about yourself">
                </textarea>
            </div>
            <div className="field field--col">
                <label>Company</label>
                <input type="text" placeholder="Company" />
            </div>
            <div className="field field--col">
                <label>Location</label>
                <input type="text" placeholder="Location" />
            </div>
            <div className="field field--col">
                <label>Website</label>
                <input type="text" placeholder="Website" />
            </div>
            <div className="field--right">
                <button>Save</button>
            </div>
        </div>
    )
}