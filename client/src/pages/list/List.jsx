import './list.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import format from 'date-fns/format'
import { DateRange } from "react-date-range";

const List = () => {

  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [options,setOptions] = useState(location.state.options)

  console.log(location)

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='lstitle'>Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date(0).endDate,"MM/dd/yyyy")}`}</span>
              {setDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
            </div>
          </div>
          <div className='listResult'></div>
        </div>
      </div>
    </div>
  )
}

export default List
