import { FormEvent, useState } from "react"
import { searchTablesByDate } from "../services/bookingsService"
import { ITable } from "../models/ITable"
import searchFormStyles from "../styles/SearchForm.module.scss";
import { IBookingDetails } from "../models/IBookingDetails";
import Button from "./Button";


interface ISearchFormProps {
  handleSearchTables: (tables: ITable[], bookingDeatils: IBookingDetails) => void,
}

export const SearchForm = ({handleSearchTables}: ISearchFormProps) => {
  const [dateInput, setDateInput] = useState(new Date().toLocaleDateString());
  const [amountInput, setAmountInput] = useState<number>(1)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (amountInput === 0) {
      alert("You have to enter a amount above 0.");
      return;
    } else if (amountInput > 6) {
      alert("If more than 6 people please contact us by phone.");
      return;
    }

    const date = new Date(dateInput).toDateString();
    const data = await searchTablesByDate(date)
    handleSearchTables(data, {date: date, amount: amountInput, tableChosen: false, table: {table: 0, sitting: 0}});
  }

  return <form onSubmit={handleSubmit} className={searchFormStyles.searchForm}>
    <input type="date" min={new Date().toLocaleDateString()} value={dateInput} onChange={e => setDateInput(e.target.value)} />
    <input type="number" value={amountInput} onChange={e => setAmountInput(+e.target.value)} />
    <Button active={true} onClick={()=> {}} offset={false} text="Search Tables" />
  </form>
}