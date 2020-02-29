import React, { useState } from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Profile } from './profile';
import { ProjectSpace } from './projectSpace';
import { Social } from './social';
import { Account } from './account';
import { Domain } from './domain';
import { UserNavigationBar } from './userNavigationBar';
import { UserSideMenu } from './userSideMenu';

import { Project } from '../project/project';
import { CreateProject } from '../project/createProject';
import { ImportProject } from '../project/importProject';
import { ProjectLanding } from '../project/projectLanding';

export const User = () => {

    const [menuExpanded, toggleMenu] = useState(false);

    /** Toggle the menu state */
    const onMenuClick = () => {
        toggleMenu(!menuExpanded);
    }

    return (
        <>
            <UserNavigationBar onMenuClick={onMenuClick} />
            <UserSideMenu menuExpanded={menuExpanded} />
            <div className="user__body container">
                <Switch>
                    <Route path="/user/project-space" component={ProjectSpace} />
                    <Route path="/user/social" component={Social} />
                    <Route path="/user/account" component={Account} />
                    <Route path="/user/domain" component={Domain} />
                    <Route path="/user/profile" component={Profile} />
                    <Redirect exact from="/user" to="/user/profile" />
                    <Route exact path="/user/project/" component={Project} />
                    <Route path="/user/project/create" component={CreateProject} />
                    <Route path="/user/project/import" component={ImportProject} />
                    <Route path="/user/project/:name" component={ProjectLanding} />
                </Switch>
            </div>
        </>
    )
}