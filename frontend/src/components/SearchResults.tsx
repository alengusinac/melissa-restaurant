import { ITable } from "../models/ITable"
import searchResultsStyles from "../styles/SearchResults.module.scss";

interface ISearchResultsProps {
  tables: ITable[];
  chooseTable: (table: ITable) => void;
}

export const SearchResults = ({ tables, chooseTable }: ISearchResultsProps) => {

  const renderTables = tables.map((table, i) => {
    return <button key={i} onClick={() => {
      chooseTable(table);
    }}>
      Table: {table.table}
      {table.sitting === 1 ? <p>18:00</p> : <p>21:00</p>}
    </button>
  })

  return <>
    <ul className={searchResultsStyles.tables}>
      {renderTables}
    </ul>
  </>
}