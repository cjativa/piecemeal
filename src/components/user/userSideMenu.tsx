import React from 'react';
import { Link } from 'react-router-dom';

const primaryItems = [
    { name: 'Profile', slug: 'profile' },
    { name: 'Project Space', slug: 'project-space' },
    { name: 'Social', slug: 'social' }
];

const secondaryItems = [
    { name: 'Account', slug: 'account' },
    { name: 'Domain', slug: 'domain' }
];


interface props {
    menuExpanded: boolean,
}

export const UserSideMenu = (props: props) => {

    const { menuExpanded } = props;
    const menuClass = (menuExpanded) ? 'open' : 'closed';

    return (
        <div className={`user-side-menu menu--${menuClass}`}>
            <ul className="user-list primary">
                {primaryItems.map((items, index) => {
                    return <li key={index}><Link className="user-list__item" to={`/user/${items.slug}`}>{items.name}</Link></li>
                })}
            </ul>
            <ul className="user-list secondary">
                {secondaryItems.map((items, index) => {
                    return <li key={index}><Link className="user-list__item" to={`/user/${items.slug}`}>{items.name}</Link></li>
                })}
            </ul>
        </div>
    )
}