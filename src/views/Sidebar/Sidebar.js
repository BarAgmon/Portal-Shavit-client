import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import '../../Semantic-UI-CSS-master/semantic.min.css';
import MenuItem from './MenuItem';

const SidebarApp = () => {
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
            <MenuItem iconName='database' iconText='Backup and restore' path='/database'/>
            <MenuItem iconName='dochub' iconText='Documentation'/>
            <MenuItem iconName='docker' iconText='Docker CLI'/>
        </Sidebar>
    );
};

export default SidebarApp