import { useState } from "react";
import { SearchForm } from "./SearchForm";
import { ITable } from "../models/ITable";
import { SearchResults } from "./SearchResults";

export const Search = () => {
  const [tables, setTables] = useState<ITable[]>([]);
  
  return <>
    <SearchForm setTables={setTables} />
    <SearchResults tables={tables} />
  </>;
};

export default Search;
