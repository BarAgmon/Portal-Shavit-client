import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {UploadOutlined} from '@ant-design/icons';
import BackupCard from "./BackupCard";

export default function BackupPage() {
    const [postgresDatabases, setPostgresDatabases] = useState([])
    useEffect(() => {
        axios.get('http://localhost:80/postgres/databases').then((response)=>{
            setPostgresDatabases(response.data.databases.map((db)=> {
                return {
                    key: JSON.parse(db).name,
                    title : JSON.parse(db).name
                };
            }));
        }).catch((err)=>{
            alert(err);
        })
    });
    return(
        <Background>
            <Header>Backup<UploadOutlined /></Header>
            <PlaceCards>
                <BackupCard title="Postgres Databases" data={postgresDatabases} leftTitle="DBs" rightTitle="Selected"/>
                <BackupCard title="Postgres Schemas" data={postgresDatabases} leftTitle="Schemas" rightTitle="Selected"/>
                <BackupCard title="Mongo Databases" data={postgresDatabases} leftTitle="DBs" rightTitle="Selected"/>
                <BackupCard title="Mongo Collections" data={postgresDatabases} leftTitle="Collections" rightTitle="Selected"/>
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
    margin-left : 11em;
`;
const Header = styled.h1`
    font-size: 2em;
    color: white;
    font-family: 'Segoe UI', 'Roboto', arial, sans-serif;
`;
