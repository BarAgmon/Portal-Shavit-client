import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Button} from 'antd';
import {SyncOutlined} from '@ant-design/icons';
import BackupFilesList from './BackupFilesList';
import StepContentCard from './StepContentCard';
import RestoreDatabase from './RestoreDatabase';
import { Steps } from 'antd';

const { Step } = Steps;

export default function RestorePage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedDbType, setSelectedDbType] = useState();
    const [whatIsRestored, setWhatIsRestored] = useState();
    const [selectedFile, setSelectedFile]=useState({});
    const steps = [
        {
            title : "DB Type",
            cardTitle: "Choose the DB type you would like to restore:",
            content : <div/> 
        },
        {
            title : "What to restore?",
            cardTitle : "Choose what you would like to restore:",
            content : <div/>
        },
        {
            title : "Choose backup file",
            cardTitle : "Choose the backup file to restore from:",
            content :<BackupFilesList setSelectedFile={setSelectedFile}/>
        },
        {
            title : "Before we finish...",
            cardTitle : "Whould you like to restore to the same or to a new one?" ,
            content : <RestoreDatabase/>
        }
    ];

    return(
        <Background>
            <Header> Restore <SyncOutlined/></Header>
            <Steps current={currentStep}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title}/>
                ))}
            </Steps>
            {steps[currentStep].content}             
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


