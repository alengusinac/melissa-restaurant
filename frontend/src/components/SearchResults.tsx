import { ITable } from "../models/ITable"
import searchResultsStyles from "../styles/SearchResults.module.scss";

interface ISearchResultsProps {
  tables: ITable[]
}

export const SearchResults = ({tables}: ISearchResultsProps) => {
  const renderTables = tables.map((table, i) => {
    return <li key={i}>
      Nr.{table.table}
      {table.sitting === 1 ? <p>18:00</p> : <p>21:00</p>}
    </li>
  })

  return <>
    <ul className={searchResultsStyles.tables}>
      {renderTables}
    </ul>
  </>
}