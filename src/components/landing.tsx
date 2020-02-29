import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__header">
                <div className="logo">piecemeal</div>
                <div className="landing__links">
                    <Link to="features" className="link--subtle">Features</Link>
                    <Link to="user" className="link--subtle">Log In</Link>
                    <Link to="sign-up" className="link--highlight">Get your free space.</Link>
                </div>
            </div>
            <div className="landing__middle">
                <h1>Presentation made simple.</h1>
                <h1>Streamline visibility for your projects.</h1>
                <p>Create your own space to showcase who you are<br />
                    and the awesome stuff you build.
                </p>
                <button className="btn">Get your free space.</button>
            </div>
        </div>
    )
}