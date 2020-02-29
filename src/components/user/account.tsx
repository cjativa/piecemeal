import React, { useState } from 'react';
import { Link, Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Information } from '../account/information';
import { Billing } from '../account/billing';
import { Username } from '../account/username';

export const Account = () => {

    const accountTabs = [
        { name: 'Information', slug: 'information', component: Information },
        { name: 'Username and Password', slug: 'username', component: Username },
        { name: 'Billing', slug: 'billing', component: Billing },
    ];

    const { pathname } = useLocation();

    return (
        <div className="account inner-container">
            <p>Account</p>
            <div className="account__tabs">
                {accountTabs.map((tab, index) => {
                    const className = pathname.includes(tab.slug) ? 'account__tab-link active' : 'account__tab-link';
                    return (
                        <Link key={index} className={className} to={`/user/account/${tab.slug}`}>{tab.name}</Link>
                    )
                })}
            </div>
            <Switch>
                {accountTabs.map((tab, index) => {
                    return (
                        <Route key={index} path={`/user/account/${tab.slug}`} component={tab.component} />
                    )
                })}
                <Redirect exact from="/user/account" to="/user/account/information" />
            </Switch>
        </div>
    )
}