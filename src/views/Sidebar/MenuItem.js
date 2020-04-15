import React from 'react';
import {Icon, Menu} from "semantic-ui-react";

export default function MenuItem ({iconName, iconText, path}) {
    return (
        <Menu.Item as='a' href={path}>
            <Icon name={iconName} />
            {iconText}
        </Menu.Item>
    )
}