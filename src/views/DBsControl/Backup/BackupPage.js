import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {UploadOutlined} from '@ant-design/icons';
import BackupCard from "./BackupCard";
import {message} from 'antd';

const GET_ALL_POSTGRES_DB='/api/v1/shavit/dbs/postgres/dbs';
const GET_ALL_MONGO_DB='/api/v1/shavit/dbs/mongo/dbs';

export default function BackupPage() {
    const getDataFromServer = (path,setState) => {
        axios.get(path).then((response)=>{
            setState(response.data.map((db)=> {
                return {
                    key: db,
                    title : db
                };
            }));
        }).catch((err)=>{
            message.error("Connection with server has lost. Please try again")
        })
    };
    const [postgresDatabases, setPostgresDatabases] = useState([])
    const [mongoDatabases, setMongoDatabases] = useState([])
    useEffect(() => {
        getDataFromServer(GET_ALL_POSTGRES_DB,setPostgresDatabases);
        getDataFromServer(GET_ALL_MONGO_DB,setMongoDatabases);
    }, []);
    return(
        <Background>
            <Header>Backup<UploadOutlined /></Header>
            <PlaceCards>
                <BackupCard title="Postgres Databases" data={postgresDatabases} leftTitle="DBs" rightTitle="Selected"/>
                <BackupCard title="Postgres Schemas" data={postgresDatabases} leftTitle="Schemas" rightTitle="Selected"/>
                <BackupCard title="Mongo Databases" data={mongoDatabases} leftTitle="DBs" rightTitle="Selected"/>
                <BackupCard title="Mongo Collections" data={mongoDatabases} leftTitle="Collections" rightTitle="Selected"/>
            </PlaceCards>      
        </Background>          
    );
}

const Background = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-around;
  flex-direction: column;
  flex-wrap:wrap;
`;
const PlaceCards = styled.div`
    display: flex;
    align-items:center;
    align-content : center;
    justify-content:space-around;
    flex-wrap: wrap;
`;
const Header = styled.h1`
    font-size: 2em;
    color: white;
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
`;
