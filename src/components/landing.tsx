import React from 'react';

export const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__header">
                <div className="logo">piecemeal</div>
                <div className="landing__links">
                    <a className="link--subtle">Features</a>
                    <a className="link--subtle">Log In</a>
                    <a className="link--highlight">Get your free space.</a>
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