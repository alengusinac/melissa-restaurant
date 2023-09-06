import { FormEvent, useState } from "react"
import { searchTablesByDate } from "../services/bookingsService"

export const SearchForm = () => {
  const [dateInput, setDateInput] = useState(new Date().toLocaleDateString())

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = new Date(dateInput);
    const data = await searchTablesByDate(date.toDateString())
    console.log(data);
    
  }

  return <form onSubmit={handleSubmit}>
    <input type="date" min={new Date().toLocaleDateString('fr-ca')} value={dateInput} onChange={e => setDateInput(e.target.value)} />
    <button>Search Tables</button>
  </form>
}