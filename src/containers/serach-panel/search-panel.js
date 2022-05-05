import { Fragment } from "react";
import InputField from "../../components/input-field/input-field";
import Button from "../../components/button/button";
import "./styles.scss";

const SearchPanel = () => {
  return (
    <Fragment>
      <div className="input-field">
        <InputField />
      </div>
      <div className="button">
        <Button />
      </div>
    </Fragment>
  );
};

export default SearchPanel;
