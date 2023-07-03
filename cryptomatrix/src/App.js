import "./App.css";
import { useState } from "react";
import logo from "./cryptomatrixsvg.svg";
import { Select } from "antd";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import RecoverAccount from "./components/RecoverAccount";
import WalletView from "./components/WalletView";

function App() {
  const [selectedChain, setSelectedChain] = useState("0x1");
  const [seedPhrase, setSeedPhrase] = useState(null);
  const [wallet, setWallet] = useState(null);

  return (
    <div className="App">
      <header>
        <img src={logo} className="headerLogo" />
        <Select
          onChange={(val) => setSelectedChain(val)}
          value={selectedChain}
          options={[
            {
              label: "Ethereum",
              value: "0x1",
            },
            {
              label: "Mumbai Testnet",
              value: "0x13881",
            },
            {
              label: "Polygon",
              value: "0x89",
            },
            {
              label: "Avalanche",
              value: "0xa86a",
            },
          ]}
          className="dropdown"
        ></Select>
      </header>
      {wallet && seedPhrase ? (
        <Routes>
          <Route path="/yourwallet" element={<WalletView />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/recover" element={<RecoverAccount />} />
          <Route
            path="/yourwallet"
            element={
              <CreateAccount
                setSeedPhrase={setSeedPhrase}
                setWallet={setWallet}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
