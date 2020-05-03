import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Button, Card} from 'antd';

export default function MainCard({cardTitle, cardContent, buttonText, disableButton}) {
    return(
        <DesignedCard title={cardTitle}>              
            {cardContent}
            <PlaceButton>   
                <ColorButtonText ghost className={disableButton ? 'disabled' : ''}>{buttonText}</ColorButtonText>        
            </PlaceButton>
        </DesignedCard>
    ) 
}

const DesignedCard = styled(Card)`
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    width : 35em;
    background : #212121;
    .ant-card-head {
        color: #cce2ffad;
    }
    .ant-card-body {
        width: 100%;
    }
`;

const PlaceButton = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: flex-end;
`;
const ColorButtonText=styled(Button)`
    color: #fff !important;
`;

