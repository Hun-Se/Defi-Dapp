import React from "react";
import "./App.css";
import ConnectWallet from "./features/connect_wallet/ConnectWallet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConnectWallet />
      </header>
    </div>
  );
}

export default App;
