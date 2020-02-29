import React from 'react';
import { Link } from 'react-router-dom';


export const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__header">
                <div className="logo">piecemeal</div>
                <div className="nav__links">
                    <Link to="features" className="link--subtle">Features</Link>
                    <Link to="user" className="link--subtle">Log In</Link>
                    <Link to="sign-up" className="link--highlight">Get your free space.</Link>
                </div>
            </div>
        </div>
    )
}