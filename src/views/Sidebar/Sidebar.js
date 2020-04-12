import React from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import '../../Semantic-UI-CSS-master/semantic.min.css';
import MenuItem from './MenuItem';
import Database from "../DBsControl/HomePage";
import DatabaseBackup from "../DBsControl/BackupPage";
import Links from "../Links/HomePage";

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
            <MenuItem iconName='database' iconText='Backup and restore' path='/backup' link={Database}/>
            <MenuItem iconName='dochub' iconText='Documentation'/>
            <MenuItem iconName='docker' iconText='Docker CLI'/>
        </Sidebar>
    );
};

export default SidebarApp