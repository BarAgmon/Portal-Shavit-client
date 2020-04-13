import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import '../../Semantic-UI-CSS-master/semantic.min.css';
import MenuItem from './MenuItem';

const SidebarApp = () => {
    const items = [{key: 1, iconText: 'Backup & Restore', iconName: 'database'},
                   {key: 2, iconText: 'Documentation', iconName: 'dochub'},
                   {key: 3, iconText: 'Docker CLI', iconName: 'docker'},
                   {key: 4, iconText: 'servers', iconName: 'server'},
                   {key: 5, iconText: 'services', iconName: 'wheelchair'}];

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
                    key={item.key} iconName={item.iconName} iconText={item.iconText}
                />
            ))}
        </Sidebar>
    );
};

export default SidebarApp