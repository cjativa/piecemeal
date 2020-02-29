import React, { useState } from 'react';

export const Domain = () => {

    const username = 'username';

    return (
        <div className="domain inner-container">
            <p>Domain</p>
            <p>Your piecemeal profile is at</p>
            <p>{`piecemeal.app/${username}`}</p>
        </div>
    )
}