import React from "react";
import {Icon, Menu} from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function MenuItem ({iconName, iconText, path}) {
    return (
        <Menu.Item as='a' to={path}>
            <Icon name={iconName} />
            {iconText}
        </Menu.Item>
    )
}