import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Project = () => {
    return (
        <div className="project">
            <Link className="btn project-btn" to="/user/project/create">
                <p>Create Project</p>
                <span>Create a new project by entering in the project details</span>
            </Link>
            <p>or</p>
            <Link className="btn project-btn" to="/user/project/import">
                <p>Import Project</p>
                <span>Import a project from your preferred source</span>
            </Link>
        </div>
    )
}