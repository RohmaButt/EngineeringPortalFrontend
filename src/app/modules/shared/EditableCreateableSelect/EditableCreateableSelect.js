import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete'
const filter = createFilterOptions()

// /* https://gist.github.com/Otagera/c491622d8a60e3a7c5a4baa6c4cffd27
//    https://dev.to/leolenzo_37/react-double-tap-text-to-input-3nk7
// */

export default class EditableCreateableSelect extends React.Component {
  constructor(props) {
    super(props)
    // init counter
    this.count = 0
    // init state
    this.state = {
      edit: false,
      optionValue: {
        inputValue: '',
        label: '',
        value: '',
      },
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.edit) {
      return {edit: props.edit}
    }
    return null
  }

  componentWillUnmount() {
    // cancel click callback
    if (this.timeout) clearTimeout(this.timeout)
  }

  handleDoubleClick(e) {
    // cancel previous callback
    if (this.timeout) clearTimeout(this.timeout)
    // increment count
    this.count++
    // schedule new callback  [timeBetweenClicks] ms after last click
    this.timeout = setTimeout(() => {
      // listen for double clicks
      if (this.count === 2) {
        // turn on edit mode
        this.setState({
          edit: true,
          optionValue: {
            inputValue: e.target.textContent,
            label: e.target.textContent,
            value: this.props.itemId,
          },
        })
      }
      // reset count
      this.count = 0
    }, 200)
  }

  handleSingleClick(e) {
    this.setState({
      edit: true,
      optionValue: {
        inputValue: e.target.textContent,
        label: e.target.textContent,
        value: this.props.itemId,
      },
      // value: e.target.textContent,
    })
  }

  handleBlur(e) {
    // close edit mode
    this.setState({
      edit: false,
      optionValue: {
        inputValue: e.target.value,
        label: e.target.value,
        value: this.props.itemId,
      },
    })
  }

  render() {
    const {doubleClick, id, data, isEnabled, selectedValue, itemId, onChange, children, ...rest} =
      this.props
    const {edit} = this.state

    if (edit) {
      // edit mode
      return (
        <Autocomplete
          autoFocus
          value={this.state.optionValue}
          onChange={(event, newValue) => {
            if (typeof newValue === 'string') {
              this.setState({
                optionValue: {
                  optionValue: newValue,
                  label: newValue,
                },
              })
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              this.setState({
                optionValue: {
                  optionValue: newValue.inputValue,
                  label: newValue.inputValue,
                },
              })
            } else {
              this.setState({
                optionValue: newValue,
              })
            }
            this.props.onChange(newValue)
            this.setState({
              edit: false,
              optionValue: {
                inputValue: '',
                label: '',
                value: '',
              },
            })
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params)
            const {inputValue} = params
            // Suggest the creation of a new value
            const isExisting = options.some((option) => inputValue === option.label)
            if (inputValue !== '' && !isExisting) {
              filtered.push({
                inputValue,
                label: `Add "${inputValue}"`,
              })
            }
            return filtered
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id='createableEditGrp'
          options={data}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue
            }
            // Regular option
            return option.label
          }}
          renderOption={(props, option) => <li {...props}>{option.label}</li>}
          style={{width: 250}}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} variant='outlined' fullWidth label='Search' />
          )}
          onBlur={this.handleBlur.bind(this)}
        />
      )
    } else {
      // view mode.
      if (doubleClick) {
        return (
          <p
            className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
            onClick={this.handleDoubleClick.bind(this)}
            {...rest}
          >
            {children}
          </p>
        )
      } else {
        return (
          <p
            className='text-muted me-2 fs-7 fw-bold text-hover-gray-800'
            onClick={this.handleSingleClick.bind(this)}
            {...rest}
          >
            {children}
          </p>
        )
      }
    }
  }
}
