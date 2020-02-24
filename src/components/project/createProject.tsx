import React, { useState } from 'react';

export const CreateProject = () => {
    return (
        <div className="create-project">
            <p>Create a new project</p>
            <p>Get started on creating your new <em>piece</em> here. You can add pages, details, and more once it's created.</p>

            <hr />

            <div className="field field--row">
                <label>Name</label>
                <input />
            </div>
            <div className="field field--row">
                <label>Description</label>
                <textarea />
            </div>
            <div className="field field--row">
                <label>Live URL</label>
                <p>Is your project already up and running somewhere? If so, feel free to link it here.</p>
                <input />
            </div>
            <div className="field field--row">
                <label>Tags</label>
                <span>Let others know what your project is about with tags. You can do this later too.</span>
                <div>

                </div>
            </div>
            <button className="btn">
                Create
            </button>
        </div>
    )
}