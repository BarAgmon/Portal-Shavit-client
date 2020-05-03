import React from 'react';
import styled from 'styled-components';
import SidebarApp from "./views/Sidebar/Sidebar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Database from "./views/DBsControl/HomePage";
import DatabaseBackup from "./views/DBsControl/Backup/BackupPage";
import Links from "./views/Links/HomePage";
<<<<<<< HEAD
import Servers from "./views/Servers/Servers";

=======
import RestorePage from './views/DBsControl/Restore/RestorePage';
>>>>>>> 4b8b271e11ab052da801573b4cdc5582c0d973cf
function App() {
  return (
        <AppDesign className="App">
            <div>
                <SidebarApp/>
            </div>
            <Router>
              <Switch>
                    <Route path="/backup" component={DatabaseBackup}/>
                    <Route path="/restore" component={RestorePage}/>
                    <Route path="/database" component={Database}/>
                    <Route path="/servers" component={Servers}/>
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

