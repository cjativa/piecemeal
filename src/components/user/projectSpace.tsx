import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const ProjectSpace = () => {
    return (
        <div className="project-space inner-container">
            <p>Project Space</p>
            <p>Show <em>and</em> tell &mdash; feature your awesome apps, works-in-progress, and projects
            <br />
                in an exciting and visual way</p>
            <div className="field--center">
                <Link to="/user/project">
                    <button>Get Started</button>
                </Link>
            </div>
        </div>
    )
}