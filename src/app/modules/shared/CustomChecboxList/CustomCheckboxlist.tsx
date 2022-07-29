import _ from 'lodash'
import { useEffect, useState } from 'react'
import { ICheckboxProps, IGenericLookup } from '../Types/sharedITypes'

const CustomCheckboxlist: React.FC<ICheckboxProps> = (props) => {
  const [checkboxListData, setCheckoxListData] = useState<IGenericLookup[]>(props.data)
  const [searchKeyword, setSearchKeyword] = useState('')

  const handleCheckbox = (e: any, selectedIndexValue: number) => {
    toggleCheckboxes(e, selectedIndexValue)
  }

  const toggleCheckboxes = (e: any, selectedIndexValue: number) => {
    if (selectedIndexValue === -1) {
      checkboxListData.map((item: IGenericLookup) => {
        return (item.checkStatus = e.target.checked)
      })
      const data = checkboxListData.map((item: any) => {
        return { value: item.value, label: item.label, checkStatus: e.target.checked }
      })
      props.setData(data)
    } else {
      const itemSelected: any = checkboxListData.filter(
        (item: IGenericLookup) => item.value === selectedIndexValue
      )
      itemSelected[0].checkStatus = e.target.checked
      const data: IGenericLookup[] = [
        itemSelected[0],
        ...checkboxListData.filter((item: IGenericLookup) => item.value !== selectedIndexValue),
      ]
      setCheckoxListData(data)
      props.setData(data)
    }
  }

  function filterData(e: any) {
    if (e.target.value !== '') {
      const resultSet = props.data.filter((f: IGenericLookup) => {
        return f.label.toLowerCase().includes(e.target.value.toLowerCase())
      })
      setCheckoxListData(resultSet)
    } else {
      setCheckoxListData(props.data)
    }
    setSearchKeyword(e.target.value)
  }

  return (
    <>
      <div
        className='d-flex align-items-center'
        data-kt-search-element='toggle'
        id='kt_header_search_toggle'
      >
        <input
          type='search'
          placeholder='🔍 Search'
          style={{ border: '1px solid #e3e0e0', width: '100%', outline: 'none' }}
          className='mb-2 py-2 px-2'
          value={searchKeyword}
          onChange={filterData}
        ></input>
      </div>
      <ul
        style={{
          listStyle: 'none',
          paddingLeft: '10px',
          borderTop: '0',
          height: '350px',
          overflowY: 'scroll',
        }}
        key={props.checkboxListName}
      >
        {checkboxListData && checkboxListData.length > 0 ? (
          checkboxListData
            .sort((a: any, b: any) => a.label.localeCompare(b.label))
            .map((item: IGenericLookup) => {
              return (
                <li key={item.value} className='me-2 py-2 fs-8 text-muted fw-bold text-hover-gray-800'>
                  <input
                    className='form-check-input me-2'
                    style={{ width: '1.5rem', height: '1.5rem' }}
                    key={item.value}
                    type='checkbox'
                    checked={item.checkStatus}
                    onChange={(e: any) => {
                      handleCheckbox(e, item.value)
                    }}
                  />
                  <span>{item.label}</span>
                </li>
              )
            })
        ) : (
          <h6>No results found!</h6>
        )}
      </ul>
    </>
  )
}

export default CustomCheckboxlist
