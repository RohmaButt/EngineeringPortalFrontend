import React from 'react'
/* https://gist.github.com/Otagera/c491622d8a60e3a7c5a4baa6c4cffd27 
   https://dev.to/leolenzo_37/react-double-tap-text-to-input-3nk7
*/
import Select from 'react-select'

const style = {
  control: (base) => ({
    ...base,
    '&:hover': {
      color: 'black',
    },
    border: 0,
    boxShadow: 'none',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    '&:hover': {
      color: 'inherit',
    },

    height: '100%',
    color: '#a1a5b7',
    display: state.selectProps.menuIsOpen ? 'none' : 'block',
  }),
}

export default class EditableReactSelect extends React.Component {
  constructor(props) {
    super(props)
    // init counter
    this.count = 0

    // init state
    this.state = {
      edit: false,
      value: '',
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
          value: '',
        })
      }
      // reset count
      this.count = 0
    }, 200) // 250 ms
    //}, settings.timeBetweenClicks) // 250 ms
  }

  handleSingleClick(e) {
    this.setState({
      edit: true,
      value: e.target.textContent,
    })
  }

  handleBlur(e) {
    // close edit mode
    this.setState({
      edit: false,
      value: e.target.value,
    })
  }

  handleEnter(e) {
    this.props.onChange(e.value)
    this.setState({
      edit: false,
      value: '',
    })
  }

  render() {
    const {doubleClick, id, data, isEnabled, selectedValue, itemId, onChange, children, ...rest} =
      this.props
    const {edit} = this.state

    if (edit) {
      // edit mode
      return (
        <Select
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            CrossIcon: () => null,
          }}
          id='regionManagerName'
          options={data}
          isLoading={!data || data.length === 0}
          isSearchable={true}
          isClearable={false}
          escapeClearsValue={true}
          styles={style}
          placeholder='Afiniti People'
          value={{
            value: selectedValue,
            label: selectedValue,
          }}
          openMenuOnFocus={true}
          autoFocus
          isDisabled={isEnabled}
          onChange={this.handleEnter.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onClick={(e) => {
            e.preventDefault()
          }}
          defaultValue={{
            value: selectedValue,
            label: selectedValue,
          }}
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
