import React from 'react';
import {Divider,Grid,Segment} from 'semantic-ui-react';
import GridColumn from './GridColumn';
import styled from 'styled-components';

export default function OptionsDiv() {
    const numberOfColumns=2;
    return(
        <StyledSegment>
            <Grid columns={numberOfColumns} stackable textAlign='center'>
                <Divider vertical>Or</Divider>
                <Grid.Row verticalAlign='middle'>
                    <GridColumn iconName='upload' text='Backup a schema or your whole db' buttonType="primary" buttonContent='Backup' path="/backup"/>
                    <GridColumn iconName='sync' text='Restore a schema or your whole db' buttonType="primary" buttonContent='Restore' path="/restore"/>
                </Grid.Row>
            </Grid>
        </StyledSegment>
    );
}
  
const StyledSegment = styled(Segment)`
    width: 40em;
    height: 20em;
    display: flex;
    align-items:center;
    justify-content:center;
`

