import React from 'react';
import TransferList from './TransferList';
import {Card, Button} from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
export default function BackupCard({title, data , leftTitle, rightTitle}) {
    return(
        <Div>
            <DesignedCard title={title} bordered={false}>
                <TransferList data={data} leftTitle={leftTitle} rightTitle={rightTitle}/>
                <PlaceButton>
                    <Button ghost>Start backup</Button>
                </PlaceButton>              
            </DesignedCard> 
        </Div>         
    );
}

const DesignedCard = styled(Card)`
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items: center;
    width : 35em;
    background : #212121;
    .ant-card-head {
        color: #cce2ffad;
    }
`;

const PlaceButton = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: flex-end;
`;
const Div = styled.div`
    display: flex;
    flex: 50% 0 0;
    margin-top: 2em;
`;
BackupCard.propTypes = {
    title:PropTypes.string.isRequired,
    data:PropTypes.array.isRequired,
    leftTitle:PropTypes.string.isRequired,
    rightTitle:PropTypes.string.isRequired
};
