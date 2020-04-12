import React from 'react';
import styled from 'styled-components';
import SidebarApp from "./views/Sidebar/Sidebar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Database from "./views/DBsControl/HomePage";
import DatabaseBackup from "./views/DBsControl/BackupPage";
import Links from "./views/Links/HomePage";

function App() {
  return (
        <AppDesign className="App">
            <div>
                <SidebarApp/>
            </div>
            <Router>
              <Switch>
                    <Route path="/backup" component={DatabaseBackup}/>
                    <Route path="/database" component={Database}/>
                    <Route path="/" component={Links}/>
                </Switch>
            </Router>
        </AppDesign>
  );
}

export default App;

const AppDesign = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color:#191919;
  min-height: 100vh; 
  font-size: calc(10px + 2vmin);
  color: white;
  flex-wrap:wrap;
  justify-content:center;
`;

