import DatePicker from "react-datepicker";
import { useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import moment from 'moment';

//https://reactdatepicker.com/#example-date-range-for-one-datepicker

const ReactDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    const datepickerRef = useRef(null);
    function handleClickDatepickerIcon() {
        const datepickerElement = datepickerRef.current;
        datepickerElement.setFocus(true);
        console.log("datepickerElement = ", datepickerElement);
    }

    const getWeekNumberForMonth = () => {
        var firstDay = new Date(this.setDate(1)).getDay();
        var totalDays = new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
        return Math.ceil((firstDay + totalDays) / 7);
    }

    return (
        <div className="d-flex flex-row">
            <DatePicker
                className='form-control'
                selected={startDate}
                onChange={(date) => {
                    console.log('date', date,)
                    // console.log('date',  m.week() - moment(m).startOf('month').week() + 1)//; moment(date), moment(date).week())
                    setStartDate(date)
                    // this.props.setStartDate(startDate)
                    // this.props.setEndDate(endDate)         
                    // this.props.setWeek(endDate)
                }}
                showWeekNumbers
                ref={datepickerRef}
            />
            <CalendarMonthIcon color="primary" style={{ marginTop: '10px' }} onClick={() => handleClickDatepickerIcon()} />
        </div>
    )

}

export default ReactDatePicker