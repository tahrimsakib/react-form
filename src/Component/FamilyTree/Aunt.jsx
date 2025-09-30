import React, { use } from "react";
import { MoneyContext } from "./FamilyTree";

const Aunt = () => {
  const [money, setMoney] = use(MoneyContext);

  const handleMoney = () => {
    setMoney(money - 100);
  };

  return (
    <div className="border-y-green-700 bg-amber-700 p-4">
      <h4>Aunt</h4>
      <button onClick={handleMoney}>tk</button>
    </div>
  );
};

export default Aunt;
