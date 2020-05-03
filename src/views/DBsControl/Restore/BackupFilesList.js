import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import {Menu, Tooltip} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import axios from 'axios';
import PropTypes from 'prop-types';

const GET_LIST_OF_BACKUP_FILES='/api/v1/shavit/dbs/backupfiles'
export default function BackupFilesList({setSelectedFile, setDisableButton}) {
    const [restoreOptionsList, setRestoreOptionsList] = useState([{"name":"10-5-20.dmp", "type":"schema", "date" : "10.05.20", "databaseType":"mongo"},
                                                                  {"name":"15-5-18.dmp", "type":"database", "date" : "15.05.18", "databaseType":"postgres"},
                                                                  {"name":"plzSchemaBackup.dmp", "type":"schema", "date" : "10.05.20", "databaseType":"mongo"},
                                                                  {"name":"teamNameBackup.dmp", "type":"database", "date" : "01.01.17", "databaseType":"postgres"},
                                                                  {"name":"bday.dmp", "type":"schema", "date" : "14.11.99", "databaseType":"mongo"},
                                                                  {"name":"devopsdb.dmp", "type":"database", "date" : "10.05.20", "databaseType":"postgres"}])
    // const getOptionalBackupsFilesToRestore = () => {
    //     axios.get(GET_LIST_OF_BACKUP_FILES).then((response)=>{
    //         setRestoreOptionsList(response.data);
    //     }).catch(()=>{
    //         message.error("Connection with server has lost. Please try again")
    //     })
    // };
    // useEffect(()=> {
    //     getOptionalBackupsFilesToRestore();
    // },[])

    const convertListToMenuItems = () => {
        return restoreOptionsList.map((file, index)=> {
            var tooltipTitle=  <div>
                                    <div>
                                        Type: {file.type}
                                    </div>
                                    <div>
                                        Database Type: {file.databaseType}  
                                    </div>
                                    <div>
                                        Backup Date: {file.date}
                                    </div> 
                                </div>
            return (
                <DesignedMenuItem key={index}>
                    {file.name}
                    <Tooltip title={tooltipTitle}>
                        <QuestionCircleOutlined/>
                    </Tooltip>
                </DesignedMenuItem>           
                );
        });
    }
    
    const handleClick = ({key}) => {
        setDisableButton(false);
        setSelectedFile(restoreOptionsList[key]);
    }
     
    return(          
        <DesignedMenu onClick={handleClick}>
            {convertListToMenuItems()} 
        </DesignedMenu>
    ) 
}

const DesignedMenuItem=styled(Menu.Item)`
    background: #212121;
    color: #fff;   
    display: flex;
    justify-content:space-between;
    align-items:center; 
`;

const DesignedMenu=styled(Menu)`
    border: #212121;
    background: #212121;
    .ant-menu-item-selected {
        background-color: #767676 !important;
    }
`;
BackupFilesList.propTypes = {
    setDisableButton:PropTypes.func.isRequired,
    setSelectedFile:PropTypes.func.isRequired
};