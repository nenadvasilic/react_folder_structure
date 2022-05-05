import { Fragment } from "react";
import SearchPanel from "Container/serach-panel/search-panel";
import ResultPanel from "Container/result-panel/result-panel";
import "./styles.scss";

const Home = () => {
  return (
    <Fragment>
      <SearchPanel />
      <div className="result-panel">
        <ResultPanel />
      </div>
    </Fragment>
  );
};

export default Home;
