
import React from "react";
import './App.css';
import Layout from './components/Layout.js';
import { useBeatSaberHttpStatus } from "./hooks/useBeatSaberStatus";


function App() {

  const { lastStatus, connectionStatus } = useBeatSaberHttpStatus();

  if(connectionStatus !== 'Open') console.log(`Status: ${connectionStatus}`);
  if(lastStatus) console.log(lastStatus);

  return <Layout />
}

export default App;