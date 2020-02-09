import React from 'react';

export const UserNavigationBar = () => {
    return (
        <div className="user-bar">
            <div className="user-bar__primary-links">
                <span>piecemeal.dev</span>
                <span>|</span>
                <span>username</span>
            </div>
            <div className="user-bar__secondary-links">
                <div className="user-links">
                    <a className="user-links__me">Me</a>
                    <div className="user-links__avatar" />
                </div>
            </div>
        </div>
    )
}