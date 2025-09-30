import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
  const newAssit = "Gold";

  const [money, setMoney] = useState(0);

  return (
    <div className="border border-b-blue-700 p-5 ">
      <h2>FamilyTree</h2>
      <h4>Money : {money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAssit}>
          <Grandpa></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
