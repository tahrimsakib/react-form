import React, { use, useContext } from "react";
import { AssetContext, MoneyContext } from "./FamilyTree";

const Myself = () => {
  const newAssit = useContext(AssetContext);

  const [money, setMoney] = use(MoneyContext);
  console.log("new", newAssit);

  return (
    <div className="border border-b-fuchsia-600 bg-blue-500">
      <h4>meeeeeeeeeeeeeeeee</h4>
      <p>assit hoilo :{newAssit} </p>
      <button onClick={() => setMoney(money+1000)}>add 1000</button>
    </div>
  );
};

export default Myself;
