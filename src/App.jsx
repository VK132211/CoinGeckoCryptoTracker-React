import { useState } from "react";
import "./App.css";
import CoinTable from "./components/CoinTable/CoinTable";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import { currencyContext } from "./context/currencyContext";

function App() {
  const [currency, setCurrency] = useState('usd');
  return (
    <>
    <currencyContext.Provider value={{ currency, setCurrency }}>
      <Navbar />
      <Banner />
      <CoinTable />
    </currencyContext.Provider>
    </>
  );
 
}

export default App;
