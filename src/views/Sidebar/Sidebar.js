import React, {useCallback, useState} from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import '../../Semantic-UI-CSS-master/semantic.min.css';
import MenuItem from './MenuItem';
import Database from "../DBsControl/HomePage";

const SidebarApp = () => {
    const [selectedItem, setItem] = useState(0);

    const items = [
            {key: 1, iconText: 'Backup & Restore', iconName: 'database'},
            {key: 2, iconText: 'Documentation', iconName: 'dochub'},
            {key: 3, iconText: 'Docker CLI', iconName: 'docker'},
            {key: 4, iconText: 'Servers', iconName: 'server'},
            {key: 5, iconText: 'Services', iconName: 'wheelchair'}
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
                    id={item.key}
                    itemClicked={(id) => setItem(id)}
                />
            ))}
        </Sidebar>
    );
};

export default SidebarApp