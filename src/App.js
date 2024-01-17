import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
import { GlobalFilter } from "./components/GlobalFilter";
import { SortingTable } from "./components/SortingTable";

const App = () => {
  return (
    <>
      <div className="App">
        {/* <BasicTable /> */}
        {/* <SortingTable /> */}
        <FilteringTable />
      </div>
      ;
    </>
  );
};

export default App;
