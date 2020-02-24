import React, { SetStateAction } from 'react';

interface props {
    onMenuClick: () => void
}

export const UserNavigationBar = (props: props) => {
    return (
        <div className="user-bar">
            <div className="user-bar__primary-links">
                <span>piecemeal.dev</span>
                <span>|</span>
                <span>username</span>
            </div>
            <div className="user-bar__secondary-links">
                <div className="user-links">
                    <button className="user-links__me" onClick={() => props.onMenuClick()}>Me</button>
                    <div className="user-links__avatar" />
                </div>
            </div>
        </div>
    )
}