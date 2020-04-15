import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import '../../Semantic-UI-CSS-master/semantic.min.css';
import MenuItem from './MenuItem';

const SidebarApp = () => {
    const items = [
            {key: 1, iconText: 'Backup & Restore', iconName: 'database', path: '/database'},
            {key: 2, iconText: 'Documentation', iconName: 'dochub', path: '/database'},
            {key: 3, iconText: 'Docker CLI', iconName: 'docker', path: '/database'},
            {key: 4, iconText: 'Servers', iconName: 'server', path: '/servers'},
            {key: 5, iconText: 'Services', iconName: 'wheelchair', path: '/database'}
        ];

    return(
        <Sidebar
            as={Menu}
            animation='uncover'
            direction={"left"}
            icon='labeled'
            inverted
            vertical
            visible
            width='thin'
        >
            {items.map((item =>
                <MenuItem
                    key={item.key}
                    iconName={item.iconName}
                    iconText={item.iconText}
                    path={item.path}
                />
            ))}
        </Sidebar>
    );
};

export default SidebarApp