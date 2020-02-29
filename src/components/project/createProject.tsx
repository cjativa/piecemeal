import React, { useState } from 'react';

export const CreateProject = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [liveUrl, setLiveUrl] = useState('');
    const [tags, setTags] = useState(['']);
    const [inputTag, setInputTag] = useState('');

    const onChange = (set: any, event: any) => {
        const { value } = event.target;
        set(value);
    }

    const onTagsEnter = (set: any, event: any) => {
        if (event.key === 'Enter') {
            set([...tags, inputTag]);
            setInputTag('');
        }
    }

    const onCreate = () => {
        console.log(name, description, liveUrl, tags);
    }

    return (
        <div className="create-project">
            <p>Create a new project</p>
            <p>Get started on creating your new <em>piece</em> here. You can add pages, details, and more once it's created.</p>
            <hr />

            {/** Project input fields */}
            <div className="field field--row">
                <label>Name</label>
                <input name="name" type="text" onChange={(e) => onChange(setName, e)} value={name} />
            </div>
            <div className="field field--row">
                <label>Description</label>
                <textarea name="description" onChange={(e) => onChange(setDescription, e)} value={description} />
            </div>
            <div className="field field--row">
                <label>Live URL</label>
                <p>Is your project already up and running somewhere? If so, feel free to link it here.</p>
                <input type="text" name="live-url" onChange={(e) => onChange(setLiveUrl, e)} value={liveUrl} />
            </div>
            <div className="field field--row">
                <label>Tags</label>
                <span>Let others know what your project is about with tags. You can do this later too.</span>
                <input type="text" name="tags" onChange={(e) => onChange(setInputTag, e)} onKeyDown={(e) => onTagsEnter(setTags, e)} value={inputTag} />
                {tags.length > 0 && <div className="tags-list">
                    {tags.map((tag, index) => {
                        return <span key={index}>{tag}</span>
                    })}
                </div>}
            </div>
            <button className="btn" onClick={onCreate}>
                Create
            </button>
        </div>
    )
}