import { useState } from "react";
import { SearchForm } from "./SearchForm";
import { ITable } from "../models/ITable";
import { SearchResults } from "./SearchResults";
import { IBookingDetails } from "../models/IBookingDetails";
import { BookTable } from "./BookTable";

export const Search = () => {
  const [tables, setTables] = useState<ITable[]>([]);
  const [bookingDetails, setBookingDetails] = useState<IBookingDetails>({date: "", amount: 0, tableChosen: false, table: {table: 0, sitting: 0}})

  const handleSearchTables = (tables: ITable[], tempDetails: IBookingDetails) => {
    setTables(tables);
    setBookingDetails(tempDetails);
  }

  const chooseTable = (table: ITable) => {
    const tempArr = {...bookingDetails, tableChosen: true, table: table};
    setBookingDetails(tempArr)
  }

  return <>
    <SearchForm handleSearchTables={handleSearchTables} />
    {bookingDetails.tableChosen ? <BookTable bookingDetails={bookingDetails} /> : <SearchResults chooseTable={chooseTable} tables={tables} />}
    
  </>;
};

export default Search;
