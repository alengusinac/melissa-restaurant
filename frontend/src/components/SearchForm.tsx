import { FormEvent, useState } from "react"
import { searchTablesByDate } from "../services/bookingsService"
import { ITable } from "../models/ITable"
import searchFormStyles from "../styles/SearchForm.module.scss";


interface ISearchFormProps {
  setTables: (tables: ITable[]) => void,
}

export const SearchForm = ({setTables}: ISearchFormProps) => {
  const [dateInput, setDateInput] = useState(new Date().toLocaleDateString())

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = new Date(dateInput);
    const data = await searchTablesByDate(date.toDateString())
    setTables(data);
    console.log(data);
    
    
  }

  return <form onSubmit={handleSubmit} className={searchFormStyles.searchForm}>
    <input type="date" min={new Date().toLocaleDateString('fr-ca')} value={dateInput} onChange={e => setDateInput(e.target.value)} />
    <button>Search Tables</button>
  </form>
}