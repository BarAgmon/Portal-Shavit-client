import React from 'react';
import styled from 'styled-components';
import AppCard from './AppCard';
import Jenkinspic from '../../images/jenkins.png';
import Dockerpic from '../../images/docker.png';
import RocketChatpic from '../../images/rocketchat.png';
import Nexuspic from '../../images/nexus.png';
import Openshiftpic from '../../images/openshift.png';
import Splunkpic from '../../images/splunk.jpg';

export default function AllAppCards() {
  return (
      <AllAppCardsDesign>
        <AppCard title='Jenkins' image={Jenkinspic} href='https://he.wikipedia.org/wiki/DevOps'/>
        <AppCard title='Docker' image={Dockerpic} href='https://he.wikipedia.org/wiki/DevOps'/>
        <AppCard title='RocketChat' image={RocketChatpic} href='https://he.wikipedia.org/wiki/DevOps'/>
        <AppCard title='Nexus' image={Nexuspic} href='https://he.wikipedia.org/wiki/DevOps'/>
        <AppCard title='Openshift' image={Openshiftpic} href='https://he.wikipedia.org/wiki/DevOps' />   
        <AppCard title='Splunk' image={Splunkpic} href='https://he.wikipedia.org/wiki/DevOps'/>   
      </AllAppCardsDesign>
  );
}


const AllAppCardsDesign= styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
  margin-right:2em;
  margin-left: 2em;
  height: 100%;
  width: 100%;
`
