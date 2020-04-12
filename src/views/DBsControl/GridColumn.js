import React from 'react';
import {Grid,Header,Icon} from 'semantic-ui-react';
import { Button } from 'antd';

import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function GridColumn({iconName, text, buttonType, buttonContent, path}){
    debugger;
    return (
        <SizeGridColumn>
            <PlaceComponents icon>
                <div><Icon name={iconName} /></div>
                <div>{text}</div>
                <div>
                <Button type={buttonType} href={path} ghost target>
                    {buttonContent}
                </Button>
                </div>
            </PlaceComponents>
         </SizeGridColumn>
    );
}

const PlaceComponents = styled(Header)`
    display : flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-between;
    width:100%;
    height:100%;
`;

const SizeGridColumn = styled(Grid.Column)`
    width:100%;
    height:100%;
`

GridColumn.propTypes = {
    iconName:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    buttonType:PropTypes.string.isRequired,
    buttonContent:PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
  };