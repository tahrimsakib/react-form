import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handlepassOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" required /> <br />
        <input
          type="password"
          name="password"
          id=""
          defaultValue={password}
          onChange={handlepassOnChange}
          required
        />
        <br />
        <input type="submit" value="submit " />
      </form>
    </div>
  );
};

export default ControlledField;
