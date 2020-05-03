import React, {useState, useEffect} from "react";
import axios from "axios";
import Service from "./Service";

export default function Servers() {
    const [servers, setServers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/shavit/resources/servers').then((response)=>{
            setServers(response.data.servers.map((server)=> {
                return {
                    key: JSON.parse(server).name,
                    title : JSON.parse(server).name
                };
            }));
        }).catch((err)=>{
            alert(err);
        })
    });

    return(
        <h1>hi</h1>
    )
}