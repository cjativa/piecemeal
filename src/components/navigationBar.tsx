import React from 'react';


export const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__header">
                <div className="logo">piecemeal</div>
                <div className="nav__links">
                    <a className="link--subtle">Features</a>
                    <a className="link--subtle">Log In</a>
                    <a className="link--highlight">Get your free space.</a>
                </div>
            </div>
        </div>
    )
}