import React from 'react'
//import settings from '../settings.js'
import Field from '../FieldStyle'

/* https://gist.github.com/Otagera/c491622d8a60e3a7c5a4baa6c4cffd27 
   https://dev.to/leolenzo_37/react-double-tap-text-to-input-3nk7
*/

export default class EditableContainer extends React.Component {
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
    //console.log(props.lists);
    if (props.edit) {
      return { edit: props.edit }
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
          value: e.target.textContent,
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
    // handle saving here

    // close edit mode
    this.setState({
      edit: false,
      value: e.target.value,
    })
  }
  handleEnter(e) {
    if (e.code === 'Enter' || e.charCode === 13 || e.which === 13) {
      this.props.handleEnter(e.target.value)

      this.setState({
        edit: false,
        value: '',
      })
    }
  }

  render() {
    const { doubleClick, id, handleEnter, type, children, ...rest } = this.props
    const { edit, value } = this.state
    if (edit) {
      // edit mode
      if (type) {///If type is set in props  then make the control of that type; Eg; numeric input type is required for some cases
        return (
          <Field
            id={id}
            type={type}
            autoFocus
            defaultValue={value}
            onBlur={this.handleBlur.bind(this)}
            onKeyPress={this.handleEnter.bind(this)}
            className='text-muted fw-bold text-muted d-block fs-7'
          />
        )
      }
      else return (
        <Field
          id={id}
          autoFocus
          defaultValue={value}
          onBlur={this.handleBlur.bind(this)}
          onKeyPress={this.handleEnter.bind(this)}
          className='text-muted fw-bold text-muted d-block fs-7'
        />
      )
    } else {
      // view mode
      if (doubleClick) {
        return (
          <p onClick={this.handleDoubleClick.bind(this)} {...rest}>
            {children}
          </p>
        )
      } else {
        return (
          <p onClick={this.handleSingleClick.bind(this)} {...rest}>
            {children}
          </p>
        )
      }
    }
  }
}
