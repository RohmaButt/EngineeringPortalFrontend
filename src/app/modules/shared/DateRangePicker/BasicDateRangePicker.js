
import React from "react";
import TextField from '@mui/material/TextField'
import Popover from '@mui/material/Popover'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import DateRangeIcon from '@mui/icons-material/DateRange'
import moment from "moment"
import { DateRangePicker } from "react-date-range"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

class BasicDateRangePicker extends React.Component {
  dateFormat = "DD/MM/YYYY";

  state = {
    displayCalendar: false,
    inputValue: "",
    anchorEl: null,
    fromDate: undefined,
    toDate: undefined
  };

  onAdornmentClick = e => {
    this.setState({ displayCalendar: true, anchorEl: e.currentTarget });
  };

  onInputChange = e => {
    console.log('onInputChange', e)
    const inputValue = e.target.value;
    const { fromDate, toDate } = this.processInputValue(inputValue);

    this.setState({ inputValue, fromDate, toDate });
  };

  onPopoverClose = (e, reason) => {
    console.log(reason);
    this.setState({ displayCalendar: false, anchorEl: null });
  };

  onSelectDateRanges = ({ selection }) => {
    let { startDate, endDate } = selection;

    startDate = moment(startDate);
    startDate = startDate.isValid() ? startDate.toDate() : undefined;

    endDate = moment(endDate);
    endDate = endDate.isValid() ? endDate.toDate() : undefined;

    let inputValue = "";
    if (startDate) inputValue += moment(startDate).format(this.dateFormat);
    if (endDate) inputValue += " - " + moment(endDate).format(this.dateFormat);

    this.setState({ fromDate: startDate, toDate: endDate, inputValue });
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  };

  processInputValue(value) {
    let [fromDate, toDate] = value.split("-").map(elm => elm.trim());

    fromDate = moment(fromDate, this.dateFormat);
    fromDate = fromDate.isValid() ? fromDate.toDate() : undefined;

    toDate = moment(toDate, this.dateFormat);
    toDate = toDate.isValid() ? toDate.toDate() : undefined;

    return { fromDate, toDate };
  }

  render() {
    return (
      <div>
        <TextField
          label="Select Date Range"
          size="small"
          sx={{
            color: '#181c32',
            input: {
              color: '#a1a5b7', fontWeight: '600', '&:hover': {
                color: 'inherit',
              }
            },

          }}
          value={this.state.inputValue}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={this.onAdornmentClick}>
                  <DateRangeIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
          onChange={this.onInputChange}
        />
        <Popover
          open={this.state.displayCalendar}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          onClose={this.onPopoverClose}
        >
          <DateRangePicker
            ranges={[
              {
                startDate: this.state.fromDate,
                endDate: this.state.toDate,
                key: "selection"
              }
            ]}
            onChange={this.onSelectDateRanges}
            staticRanges={undefined}
            inputRanges={undefined}
            showMonthAndYearPickers={false}
            moveRangeOnFirstSelection={false}
            showDateDisplay={false}
            scroll={{ enabled: true }}
          />
        </Popover>
      </div>
    );
  }
}

export default (BasicDateRangePicker);
