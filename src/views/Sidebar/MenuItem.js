import React from 'react';
import {Icon, Menu} from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function MenuItem ({iconName, iconText, itemClicked, id}) {
    return (
        <Menu.Item as='a' to='Database' onClick={() => itemClicked(id)}>
            <Icon name={iconName} />
            {iconText}
        </Menu.Item>
    )
}

//to={path}