import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Aunt from "./Aunt";

const Grandpa = () => {
  return (
    <div className="border border-amber-700 p-4">
      <h4 className="text-2xl ">Grandpa</h4>
      <section>
        <Dad></Dad>
        <Uncle></Uncle>
        <Aunt></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
<h4>Grandpa</h4>;
