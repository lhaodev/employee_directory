import React from "react";
import Navbar from "./components/navbar";
import ResultTable from "./components/resultTable";
//import SearchBar from "./components/searchBar";
import "./App.css";



function App() {
  document.title = "Employee Directory";
  return (

    <div>
      <Navbar />
      {/* <SearchBar /> */}
      <ResultTable />
    </div>

  );
}

export default App;

