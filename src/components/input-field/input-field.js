import { useState } from "react";
import "./styles.scss";

const InputField = () => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter your query"
      onChange={(e) => onChange(e)}
    ></input>
  );
};

export default InputField;
