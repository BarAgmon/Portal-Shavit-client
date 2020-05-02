import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import {SyncOutlined} from '@ant-design/icons';
import BackupFilesList from './BackupFilesList';
import MainCard from './MainCard';
import RestoreDatabase from './RestoreDatabase';

export default function RestorePage() {
    const [disableButton, setDisableButton]=useState(true);
    const [selectedFile, setSelectedFile]=useState({});
    //var content = <BackupFilesList setDisableButton={setDisableButton} setSelectedFile={setSelectedFile}/>;
    var content = <RestoreDatabase setDisableButton={setDisableButton}/>
    return(
        <Background>
            <Header> Restore <SyncOutlined/></Header>
            <MainCard cardTitle="Choose the backup file to restore from:" 
                      cardContent={content} 
                      buttonText="Next" 
                      disableButton={disableButton}/>              
        </Background>
    ) 
}

const Background = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-around;
  flex-direction: column;
  flex-wrap:wrap;
`;

const Header = styled.h1`
    font-size: 2em;
    color: white;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;


