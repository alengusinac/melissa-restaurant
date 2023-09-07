import { useEffect, useState } from "react";
import { SearchForm } from "./SearchForm";
import { ITable } from "../models/ITable";

export const Search = () => {
  const [tables, setTables] = useState<ITable[]>([]);
  useEffect(() => {
    console.log(tables);
    
  })
  return <>
    <SearchForm setTables={setTables} />
  </>;
};

export default Search;
